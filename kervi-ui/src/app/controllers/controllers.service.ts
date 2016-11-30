// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import { ControllerModel, ControllerButtonModel, ControllerSwitchButtonModel, ControllerInputModel, ControllerSelectModel } from './models/controller.model'
import { KerviService } from "../kervi.service";
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class ControllersService {
    private controllers: ControllerModel[] = [];
    private controllerTypes: string[] = [];
    private currentCameraController: ControllerModel = null;
    private cameraControllers: ControllerModel[] = [];
    private _controllers$: BehaviorSubject<ControllerModel[]> = new BehaviorSubject<ControllerModel[]>([]);
    private _controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    private _cameraControllers$: BehaviorSubject<ControllerModel[]> = new BehaviorSubject<ControllerModel[]>([]);
    private _currentCameraController$: BehaviorSubject<ControllerModel> = new BehaviorSubject<ControllerModel>(null);

    constructor(private kerviService: KerviService) {
        var self = this;

        var s = this.kerviService.connected$.subscribe(function (connectedValue) {
            if (connectedValue) {
                self.refreshControllers();
                self.kerviService.spine.addEventHandler("moduleStarted", "", function (id, value) {
                    console.log("controllers module started");
                    self.refreshControllers()
                });

                self.kerviService.spine.addEventHandler("moduleStopped", "", function (id, value) {
                    console.log("module stopped");
                    setTimeout(function () {
                        self.refreshControllers();
                    }, 3000);
                })
            } else {
                self.controllers = [];
                self.controllerTypes = [];
                self._controllers$.next(self.controllers);
                self._controllerTypes$.next(self.controllerTypes);
            }
        });
    }

    private refreshControllers() {
        var self = this;
        self.controllers = [];
        self.controllerTypes = [];
        self.currentCameraController = null;
        self.cameraControllers = [];

        self.kerviService.spine.sendQuery("getControllerInfo", null, function (message) {
            console.log("controller info", message);
            self.updateControllers.call(self, message);
            self._controllers$.next(self.controllers);
            self._controllerTypes$.next(self.controllerTypes);
            self.updateCameraControllers();
            self.setEventHandlers();
            //console.log("ciu",self.controllers);
        });
    }

    public getControllers$() {
        return this._controllers$.asObservable();
    }

    public getControllerTypes$() {
        return this._controllerTypes$.asObservable();
    }

    public getCurrentCameraController$() {
        return this._currentCameraController$.asObservable();
    }

    public getCameraControllers$() {
        return this._cameraControllers$.asObservable();
    }

    public getDashboardControllers(dashboard: string, type: string = "") {
        //console.log("gdc",dashboard,type,this.controllers.length);

        var result = [];
        for (let controller of this.controllers) {
            if (controller.dashboards && controller.dashboards.indexOf(dashboard) >= 0)
                if (type == "" || controller.type == type)
                    result.push(controller);
        }
        //console.log("gdce",result);
        return result;

    }

    public getControllerById(id: string) {
        for (let controller of this.controllers) {
            if (controller.id==id)
                return controller;
        }
        return null;

    }

    public getControllerComponent(id) {
        //console.log("gdc",dashboard,type,this.controllers.length);

        for (let controller of this.controllers) {
            console.log("gccp",controller);
            for (let component of controller.components){
                console.log("gccp b",component);
                if (component.id==id)
                    return component
            }
        }
        //console.log("gdce",result);
        return null;

    }

    public getDashboardCameras(dashboard: string) {
        //console.log("gdc",dashboard,type);

        var result = [];
        for (let controller of this.cameraControllers) {
            if (controller.dashboards && controller.dashboards.indexOf(dashboard) >= 0)
                result.push(controller);
        }
        return result;
    }

    public setCurrentCamera(cameraId: string) {
        for (let controller of this.cameraControllers) {
            if (controller.id == cameraId) {
                this.currentCameraController = controller;
                this._currentCameraController$.next(this.currentCameraController);
            }
        }
    }

    private setEventHandlers() {
        var self = this;
        this.kerviService.spine.addEventHandler("controllerButtonStateChange", "", function (id, value) {
            console.log("bsc", this, id, value);
            for (let controller of self.controllers) {
                for (let component of controller.components) {
                    if (component.id == value.button) {
                        var button = component as ControllerSwitchButtonModel;
                        button.state$.next(value.state);
                    }
                }
            }
        });

        this.kerviService.spine.addEventHandler("changeControllerInputValue", "", function (id, value) {
            console.log("isc", this, id, value);
            for (let controller of self.controllers) {
                for (let component of controller.components) {
                    if (component.id == value.input) {
                        var input = component as ControllerInputModel;
                        input.value$.next(value.value);
                    }
                }
            }
        });

        this.kerviService.spine.addEventHandler("controllerSelectChange", "", function (id, value) {
            console.log("isc", this, id, value);
            for (let controller of self.controllers) {
                for (let component of controller.components) {
                    if (component.id == value.select) {
                        var select = component as ControllerSelectModel;
                        select.selectOptions(value.value)
                        
                    }
                }
            }
        });


    }

    private updateCameraControllers() {
        var result = [];
        for (let controller of this.controllers) {
            if (controller.type == "camera")
                result.push(controller);
        }
        this.cameraControllers = result;
        this._cameraControllers$.next(this.cameraControllers);
        if (this.cameraControllers.length > 0)
            this.setCurrentCamera(this.cameraControllers[0].id);
    }

    private updateControllers = function (message) {
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                this.updateControllers(message[i]);
            }
        } else {
            var controller = new ControllerModel(message);
            this.controllers.push(controller);
            if (this.controllerTypes.indexOf(controller.type) == -1) {
                this.controllerTypes.push(controller.type);
            }
        }
    }
}
