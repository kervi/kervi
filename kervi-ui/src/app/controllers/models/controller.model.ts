import { BehaviorSubject } from 'rxjs/Rx';


export interface IControllerComponent {
    id: string;
    type: string;
}

export class ControllerInputModel implements IControllerComponent {
    public name: string;
    public type: string;
    public orientation: string;
    public unit: string;
    public value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public maxValue: number;
    public minValue: number;
    public command: string;
    public id: string;
    public ui = {
        type: "",
        orientation: ""
    }

    constructor(message: any) {
        this.name = message.name;
        this.type = message.componentType;
        this.orientation = message.orientation;
        this.unit = message.unit;
        this.value$.next(message.value);
        this.maxValue = message.maxValue;
        this.minValue = message.minValue;
        this.command = message.command;
        this.id = message.id;

        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
    }
}

export class ControllerSwitchButtonModel implements IControllerComponent {
    public id: string;
    public name: string;
    public type: string;
    public onCommand: string;
    public offCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.onCommand = message.onCommand;
        this.offCommand = message.offCommand;
        this.state$.next(message.state);

    }
}

export class ControllerButtonModel implements IControllerComponent {
    public id: string;
    public name: string;
    public type: string;
    public onCommand: string;
    public offCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.clickCommand = message.onClick;

    }
}

export class ControllerModel {
    public type: string;
    public name: string;
    public id: string;
    public parameters: any;
    public components: IControllerComponent[] = [];
    public dashboards: string[];
    public template:string;
    constructor(message: any) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.dashboards = message.dashboards;
        this.parameters = message.parameters;
        this.template=message.template;
        for (let c of message.components) {
            var component = null;
            if (c.componentType == "button")
                component = new ControllerButtonModel(c)
            else if (c.componentType == "switchButton")
                component = new ControllerSwitchButtonModel(c)
            else if (c.componentType == "input")
                component = new ControllerInputModel(c)
            if (component)
                this.components.push(component);
        }
    }
}