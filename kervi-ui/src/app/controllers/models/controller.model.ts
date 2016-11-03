import {BehaviorSubject} from 'rxjs/Rx';

export class ControllerAxisModel{
    public name:string;
    public type:string ;
    public orientation:string; 
    public unit:string;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public maxValue: number;
    public minValue: number;
    public command: string;
    public id:string;

    constructor(message:any){
        this.name=message.name;
        this.type=message.type;
        this.orientation=message.orientation;
        this.unit=message.unit;
        this.value$.next(message.value);
        this.maxValue=message.maxValue;
        this.minValue=message.minValue;
        this.command=message.command;
        this.id=message.id;
    }
}

export class ControllerButtonModel{
    public id:string;
    public name: string;
    public type: string;
    public onCommand: string;
    public offCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor (message){
        this.id=message.id;
        this.name=message.name;
        this.type=message.type;
        if (this.type=="switch"){
            this.onCommand=message.onCommand;
            this.offCommand=message.offCommand;
            this.state$.next(message.state);
        } else {
            this.clickCommand=message.onClick;
        }
    }
}

export class ControllerModel{
    public type: string;
    public name: string;
    public id: string; 
    public parameters: any;
    public axes: ControllerAxisModel[]=[];
    public buttons: ControllerButtonModel[]=[];
    public dashboards: string[];

    constructor(message:any){
        this.id=message.id;
        this.name=message.name;
        this.type=message.type;
        this.dashboards=message.dashboards;
        this.parameters=message.parameters;
        
        for (let b of message.buttons){
              var button=new ControllerButtonModel(b)
              this.buttons.push(button);
        }
        for (let a of message.axes){
              var axis=new ControllerAxisModel(a)
              this.axes.push(axis);
        }   
    }
}