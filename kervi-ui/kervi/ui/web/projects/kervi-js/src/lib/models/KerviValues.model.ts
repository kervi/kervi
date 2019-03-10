// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { BehaviorSubject } from 'rxjs';
import { KerviBaseService } from '../kervi-js.service'
declare var Qty:any;

export class KerviValue implements IComponent{
    public name: string;
    public componentType = "KerviValue"
    public typeName:string = null;    
    public id: string;
    public dashboards: DashboardLink[] = [];
    public isInput:boolean;
    public command: string;
    public valueTS:Date;

    public ui = {
        type: "",
        orientation: "",
        visible: true
    }
}

export abstract class KerviValueType<valueType> extends KerviValue{
    
    public value$: BehaviorSubject<valueType>;
    protected kerviService:KerviBaseService = null;

    constructor(message:any, kerviService:KerviBaseService){
        super();
        this.kerviService = kerviService;
        this.value$= new BehaviorSubject<valueType>(message.value);
        this.name = message.name;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.command = message.command;
        this.id = message.id;
        this.ui["type"] = message.componentType;
        this.ui["orientation"] = message.orientation;
        this.ui["visible"] = message.visible;
        
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    get value(){
       
        //console.log("gv", this.id, this.value$.value)
       return this.value$.value 
    }

    set value(value:valueType){
        console.log("sv", this.id);
        this.value$.next(value); 
        this.kerviService.spine.sendCommand(this.command, value);
     }

    protected abstract getDefaultValue():valueType;
    public set(v:valueType, notify:boolean=true){
        this.value$.next(v);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
    }
}


export enum ValueRangeType {normal, warning, error};

export class ValueRange{
    
    public start:number = null;
    public end:number = null;
    public type:ValueRangeType = null;

    constructor(range:any){
        this.start = range["start"];
        this.end = range["end"]
        if (range["type"] == "warning")
            this.type = ValueRangeType.warning;
        else if (range["type"] == "error")
            this.type = ValueRangeType.error;
        else
            this.type = ValueRangeType.normal;
    }
}



export class KerviEnumOptionModel{
    public value:string;
    public text:string;
    public selected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(messageOption:any){
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
}

export class SelectValue extends KerviValueType<string[]>{
    public options:KerviEnumOptionModel[] = [];
    public lastSelected$:BehaviorSubject<KerviEnumOptionModel> = new BehaviorSubject<KerviEnumOptionModel>(null); 
    
    constructor (message:any, kerviService:KerviBaseService){
        super(message, kerviService);
        var self = this;
        this.options = []
        
        for (let option of message.options){
            this.options.push( new KerviEnumOptionModel(option) );
        }

        this.selectOptions(this.value$.value);
        this.value$.subscribe(function(v){
            self.selectOptions(v);
        });
    }

    protected getDefaultValue():string[]{
        return [];
    }

    
    public selectOptions(selectedOptions:any){
        console.log("soc");
        if (!selectedOptions)
            return;
        for (let option of this.options){
            option.selected$.next(false);
        }
        for (let selectedOption of selectedOptions){
            console.log("so", selectedOption)
            for(let option of this.options){
                console.log("sox", option )
                if (option.value == selectedOption){
                    option.selected$.next(true);
                    this.lastSelected$.next(option);
                    console.log("os", option.text, option.selected$.value);
                    break;
                }
            }
        }
    }
}

export class NumberValue extends KerviValueType<number> {
    public unit: string;
    public qtyUnitFrom:string;
    public qtyUnitTo:string = null;
    public maxValue: number;
    public minValue: number;
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    public ranges: ValueRange[] = [];

    protected getDefaultValue():number{
        return 0;
    }

    constructor(message: any, kerviService:KerviBaseService) {
        super(message, kerviService);
        this.unit = message.unit;
        this.typeName = "Number";
    
        	
        this.qtyUnitFrom = message.unit;
        if (this.unit == "c" && kerviService.application$.value["display"]["unit_system"]["temperature"]=="F"){
            this.qtyUnitFrom = "tempC";
            this.qtyUnitTo = "tempF";
            this.unit = "F"
        }

        for (var range of message.ranges){
            if (this.qtyUnitTo){
                var q = new Qty(range["start"], this.qtyUnitFrom);
                range["start"] = q.to(this.qtyUnitTo).scalar
                var q = new Qty(range["end"], this.qtyUnitFrom);
                range["end"] = q.to(this.qtyUnitTo).scalar
                this.ranges.push(new ValueRange(range));
            } else
                this.ranges.push(new ValueRange(range));
        }
        
        if (this.qtyUnitTo && message.maxValue){
            var q = new Qty(message.maxValue, this.qtyUnitFrom);
            this.maxValue = q.to(this.qtyUnitTo).scalar;
        } else
            this.maxValue = message.maxValue; 

        if (this.qtyUnitTo && message.minValue){
            var q = new Qty(message.minValue, this.qtyUnitFrom);
            this.minValue = q.to(this.qtyUnitTo).scalar;
        } else
            this.minValue = message.minValue; 
        
        
        var spl = []
        for(var spv of message.sparkline){
            if (this.qtyUnitTo){
                console.log("spv", spv);
                var q = new Qty(spv.value, this.qtyUnitFrom);
                //spv.value = q.to(this.qtyUnitTo).scalar;
            }
            spl.push(spv)
        }
        this.sparkline$.next(spl);
        this.set(message.value, false);
    }

    set(v, notify=true){
        var newValue = v;
        if (this.qtyUnitTo){
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
        } 

        this.value$.next(newValue);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
        var spl=this.sparkline$.value;
        spl.push(newValue);
        if (spl.length>10)
             spl.shift();
        this.sparkline$.next(spl);  
        
    }
}

export class StringValue extends KerviValueType<string> {
    
    protected getDefaultValue():string{
        return "";
    }

    constructor(message: any, kerviService:KerviBaseService) {
        super(message, kerviService)
        this.typeName = "String";
    }
    
}

export class BooleanValue extends KerviValueType<boolean> {
    constructor(message, kerviService:KerviBaseService) {
        super(message, kerviService)
        this.typeName = "Boolean";
    }

    protected getDefaultValue():boolean{
        return false;
    }
}

export class DateTimeValue extends KerviValueType<Date> {
    public subType: string;
    
    constructor(message, kerviService:KerviBaseService) {
        super(message, kerviService)
        this.subType = message.inputType;
        this.typeName = "DateTime";
    }

    protected getDefaultValue():Date{
        return new Date();
    }
    
}

export class ColorValue extends KerviValueType<string> {
    
    constructor(message, kerviService:KerviBaseService) {
        super(message, kerviService)
        this.typeName = "Color";
    }

    protected getDefaultValue():string{
        return "#ffffff";
    }    
}