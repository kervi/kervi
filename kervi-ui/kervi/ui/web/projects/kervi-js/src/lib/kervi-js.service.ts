// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { Injectable } from '@angular/core';
import { KerviSpineBase } from './spine/kervi-spinebase';
import { KerviWSSpine } from './spine/kervi-ws';
import { KerviRMQSpine } from './spine/kervi-rmq';
import {  BehaviorSubject, Observable } from 'rxjs';
import { IComponent } from './models/IComponent.model';
import { ComponentFactory } from './models/factory';
import { DashboardMessageModel } from './models/dashboard.model';
import { Dashboard } from './models/dashboard.model';
import { FileBase, Directory } from './models/file.model';
import { Stream } from './models/stream.model';
declare var kerviSocketAddress: any;
declare var socketProtocol: any;

export enum ConnectionState {disconnected, loading, authenticate, connected}
export enum UserLogStateType {normal, warning, error}

@Injectable()
export class KerviBaseService {
  public spine: KerviSpineBase = null;
  private lastAppPingTime: Date = null;
  private lastPingDiff = 0;
  public appPingDiff$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public appPingDelay$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public mps$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private appInfo = null;
  private  texts: {} = null;
  private components: IComponent[] = [];
  private components$: BehaviorSubject<IComponent[]> = new  BehaviorSubject<IComponent[]>([]);

  public connectionState$: BehaviorSubject<ConnectionState> = new  BehaviorSubject<ConnectionState>(ConnectionState.disconnected);
  public  application$: BehaviorSubject<any>;
  public doAuthenticate = false;
  public componentsChanged$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);

  private logMessages: DashboardMessageModel[] = [];
  private logMessages$: BehaviorSubject<DashboardMessageModel[]> = new  BehaviorSubject<DashboardMessageModel[]>([]);
  private lastLogMessage$: BehaviorSubject<DashboardMessageModel> = new  BehaviorSubject<DashboardMessageModel>(null);
  private LogMessageCount$: BehaviorSubject<number> = new  BehaviorSubject<number>(0);
  private LogMessageState$: BehaviorSubject<UserLogStateType> = new  BehaviorSubject<UserLogStateType>(UserLogStateType.normal);

  private streams = {}

  IPCReady$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);

  private _resolveSelf;
  private _rejectSelf;
  private authPromise: Promise<string> = null;

  constructor() {
    console.log('kervi service constructor');
    const self = this;
    this.application$ = new BehaviorSubject<any>(null);
    this.IPCReady$.subscribe(function(connected) {
      if (connected) {
        console.log('kervi service ipc ready (connected)');
        self.spine.addEventHandler('valueChanged', '', function(id, value) {
          console.log("vc", id, value);
          for (const component of self.components) {
            if (component.id === value.id) {
              const dynamicValue = component as any;
              dynamicValue.valueTS = new Date(this.timestamp);
              dynamicValue.set(value.value, false);
            }
          }
        });

        self.spine.addEventHandler('appPing', null, function(id, data) {
          // console.log('appPing', self.lastAppPingTime, id, data);
          if (self.lastAppPingTime === null) {
            self.lastAppPingTime = new Date();
          } else {
            const now = new Date();
            const pingDiff = now.getTime() - self.lastAppPingTime.getTime() - 1000;
            const pingDelay = now.getTime() - data.ts * 1000;
            self.appPingDelay$.next(pingDelay);
            self.lastAppPingTime = now;
            if (pingDiff !== self.lastPingDiff) {
              self.lastPingDiff = pingDiff;
              self.appPingDiff$.next(self.lastPingDiff);
            }
          }
        });

        self.spine.addEventHandler('actionStarted', '', function(id) {
          console.log('as', id);
          for (const component of self.components) {
            if (component.id === id) {
              const action = component as any;
              action.running$.next(true);
            }
          }
        });

        self.spine.addEventHandler('actionDone', '', function(id) {
          console.log('ad', id);
          for (const component of self.components) {
            if (component.id === id) {
              const action = component as any;
              action.running$.next(false);
            }
          }
        });

        self.spine.addEventHandler('userLogMessage', null, function(v) {
          const messages = self.logMessages$.value;
          const newMessage = new DashboardMessageModel(this);
          messages.unshift(newMessage);
          if (messages.length > 10) {
            messages.pop();
          }

          let hasErrors = 0;
          let hasWarnings = 0;
          for (const message of messages) {
            if (message.level === 1) {
              hasErrors ++;
            }
            if (message.level === 2) {
              hasWarnings ++;
            }
          }
          if (hasErrors) {
            self.LogMessageState$.next(UserLogStateType.error);
          } else if (hasWarnings) {
            self.LogMessageState$.next(UserLogStateType.warning);
          } else {
            self.LogMessageState$.next(UserLogStateType.normal);
          }
          self.LogMessageCount$.next(messages.length);
          self.lastLogMessage$.next(newMessage);
          self.logMessages$.next(messages);
        });
      }
    });
  }

  public GetDirectory(path: string): Promise<Directory> {
    const promise = new Promise<Directory>((resolve, reject) => {
      const directory = new Directory(path);
      this.spine.sendQuery('files_get_dir', path, function(directoryFiles) {
        directory.updateFiles(directoryFiles);
        resolve(directory);
      });
    });
    return promise;
  }

  public GetThumbnail(path: string): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
      this.spine.sendQuery('files_get_thumbnail', path, function(thumbnail) {
        resolve(thumbnail);
      });
    });
    return promise;
  }

  public GetFile(path: string): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
      this.spine.sendQuery('files_get_file', path, function(file) {
        resolve(file);
      });
    });
    return promise;
  }

  public GetStream(streamId: string, events = []) {
    return new Stream(streamId, events, this);
  }

  public text(key: string, defaultValue: string= ''): string {
    if (this.texts && key in this.texts) {
      return this.texts[key];
    } else {
      return defaultValue;
    }
  }

  public getLogMessages$(): Observable<DashboardMessageModel[]> {
    return this.logMessages$.asObservable();
  }

  public getLastLogMessage$(): Observable<DashboardMessageModel> {
    return this.lastLogMessage$.asObservable();
  }

  public getLogState$(): Observable<UserLogStateType> {
    return this.LogMessageState$.asObservable();
  }

  public getLogMessageCount$(): Observable<number> {
    return this.LogMessageCount$.asObservable();
  }

  public isAppEmpty() {
    const defaultDashboard = this.getDefaultDashboard();
    if (defaultDashboard) {
      return defaultDashboard.isEmpty();
    }
    return true;
  }

  public getComponent(id: string, componentType: string = null) {
    for (const component of this.components) {
      if (component.id === id && (componentType == null || component.componentType === componentType)) {
        return component;
      }
    }
    return null;
  }

  public getComponentsByType(type: string) {
    const result = [];
    for (const component of this.components) {
      if (component.componentType === type) {
        result.push(component);
      }
    }
    return result;
  }

  public getDefaultDashboard(): Dashboard {
    const dashboards = this.getComponentsByType('dashboard') as Dashboard[];
    for (const dashboard of dashboards) {
      if (dashboard.isDefault) {
          return dashboard;
      }
    }
    if (dashboards.length > 0) {
      return dashboards[0];
    }
    return null;
}

  public connect() {
    let address = null;
    let protocol = 'ws';
    try {
      if (kerviSocketAddress) {
        address = kerviSocketAddress;
      }
      if (socketProtocol) {
        protocol = socketProtocol;
      }
    } catch (e) {
      // for testing with ng serve
      const httpProtocol = location.protocol;
      if (httpProtocol === 'https') {
        protocol = 'wss';
      }
      const httpHost = window.location.hostname;
      address = httpHost + ':9000';
    }
    console.log('ks', address);

    this.spine = new KerviWSSpine({
      address: address,
      protocol: protocol,
      onOpen: this.onOpen,
      onClose: this.onClose,
      onAuthenticate: this.onAuthenticate,
      onAuthenticateFailed: this.onAuthenticateFailed,
      onLogOff: this.onLogoff,
      onAuthenticateStart: this.onAuthenticateStart,
      onMPS: this.onMPS,
      targetScope: this
    });
  }

  public connectMQ() {
    console.log('ks', sessionStorage.getItem('mqc'));

    if (sessionStorage.getItem('mqc')) {
      this.spine = new KerviRMQSpine({
        onOpen: this.onOpen,
        onClose: this.onClose,
        onAuthenticate: this.onAuthenticate,
        onAuthenticateFailed: this.onAuthenticateFailed,
        onLogOff: this.onLogoff,
        onAuthenticateStart: this.onAuthenticateStart,
        targetScope: this,
        apiToken: JSON.parse(sessionStorage.getItem('mqc'))
      });
    } else {
      console.log('qmc not found in storage');
    }
  }

  isAnonymous() {
    return this.spine.options.userName === 'anonymous';
  }

  authenticate(userName, password) {
    console.log('sa', userName, password);
    this.authPromise = new Promise<string>((resolve, reject) => {
      this._resolveSelf = resolve;
      this._rejectSelf = reject;
    });
    this.spine.authenticate(userName, password);
    return this.authPromise;
  }

  logoff() {
    this.spine.logoff();
  }

  private onAuthenticateStart() {

  }

  private onAuthenticate() {
    this.doAuthenticate = true;
    this.reset();
    this._resolveSelf('ok');
  }

  private onAuthenticateFailed() {
    this._rejectSelf('error');
  }

  private onLogoff() {
    this.doAuthenticate = true;
    if (this.spine.firstOnOpen) {
      this.IPCReady$.next(true);
    }
    this.reset();
  }

  private reset() {
    this.components = [];
    this.components$.next(this.components);

    const messages = [];
    this.LogMessageState$.next(UserLogStateType.normal);
    this.LogMessageCount$.next(messages.length);
    this.logMessages$.next(messages);

    if (this.IPCReady$.value) {
      this.connectionState$.next(ConnectionState.authenticate);
    } else {
      this.connectionState$.next(ConnectionState.disconnected);
    }
  }

  private getComponentInfo(retryCount, module_load) {
    const self = this;
    this.spine.sendQuery('GetApplicationInfo', function(appInfo) {
      console.log('app info', appInfo);
      this.spine.sendQuery('getComponentInfo', function(message) {
        console.log('component info', message);
        self.application$.next(appInfo);
        self.texts = appInfo.display.texts;
        self.components = ComponentFactory.createComponents(message, self);
        ComponentFactory.FixControllerReferences(self.getComponentsByType('controller'));
        self.components$.next(self.components);
        self.connectionState$.next(ConnectionState.connected);
        if (module_load) {
          self.componentsChanged$.next(true);
        }
        console.log('components', self.components);
      },
      function() {
        console.error('get component info timeout');
        if (retryCount > 0) {
          self.getComponentInfo(retryCount - 1, module_load);
        }
      });
    });
  }

  private onOpen(first) {
    console.log('kervi service on open', this.spine.firstOnOpen, first, this);
    const self = this;
    this.connectionState$.next(ConnectionState.loading);
    this.doAuthenticate = this.spine.doAuthenticate;
    this.getComponentInfo(2, false);
    if (self.spine.firstOnOpen) {
      this.IPCReady$.next(true);
      this.spine.addEventHandler('moduleStarted', '', function() {
          console.log('module loaded', self.components);
          setTimeout(function() {
            self.getComponentInfo(2, true);
          }
          , 2000);
      });

      this.spine.addEventHandler('moduleStopped', '', function() {
          console.log('module unloaded');
          setTimeout(function() {
            console.log('module unloaded, refresh');
            self.getComponentInfo(2, true);
        }, 5000);
      });
    }
  }

  private onClose() {
    this.reset();
    console.log('ks on close');
    this.IPCReady$.next(false);
  }

  private onMPS(mps: number) {
    this.mps$.next(mps);
  }

  private onHeartbeat() {

  }

  private onConnect() {

  }
}
