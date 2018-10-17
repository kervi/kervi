// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { BehaviorSubject } from 'rxjs/Rx';
import { KerviService } from '../kervi.service'
//import { ControllersFactory } from './factory' 
declare var Qty:any;

abstract class DynamicValue<valueType> implements IComponent{
    public name: string;
    public componentType = "DynamicValue"
    public type:any;
    public orientation:any;
        
    public visible: boolean;
    public id: string;
    public dashboards: DashboardLink[] = [];
    public isInput:boolean;
    public command: string;
    public valueTS:Date;
    public value$: BehaviorSubject<valueType>;
    public ui = {
        type: "",
        orientation: ""
    }

    constructor(message:any){
        this.value$= new BehaviorSubject<valueType>(message.value);
        this.name = message.name;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.visible = message.visible;
        this.command = message.command;
        this.id = message.id;
        this.type = message.componentType;
        this.orientation = message.orientation;
        
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    protected abstract getDefaultValue():valueType;


    protected setValue(v){
        this.value$.next(v)
    }
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
}



export enum DynamicRangeType {normal, warning, error};

export class DynamicRange{
    
    public start:number = null;
    public end:number = null;
    public type:DynamicRangeType = null;

    constructor(range:any){
        this.start = range["start"];
        this.end = range["end"]
        if (range["type"] == "warning")
            this.type = DynamicRangeType.warning;
        else if (range["type"] == "error")
            this.type = DynamicRangeType.error;
        else
            this.type = DynamicRangeType.normal;
    }
}



export class DynamicEnumOptionModel{
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

export class DynamicEnumModel extends DynamicValue<string[]>{
    public options:DynamicEnumOptionModel[] = [];
    public lastSelected$:BehaviorSubject<DynamicEnumOptionModel> = new BehaviorSubject<DynamicEnumOptionModel>(null); 
    
    constructor (message:any){
        super(message);
        var self = this;
        this.options = []
        
        for (let option of message.options){
            this.options.push( new DynamicEnumOptionModel(option) );
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

    setValue(v){
        this.value$.next(v)
    }
}

export class DynamicNumberModel extends DynamicValue<number> {
    public unit: string;
    public qtyUnitFrom:string;
    public qtyUnitTo:string = null;
    public maxValue: number;
    public minValue: number;
    public sparkline$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    public ranges: DynamicRange[] = [];

    protected getDefaultValue():number{
        return 0;
    }

    constructor(message: any, kerviService:KerviService) {
        super(message);
        this.unit = message.unit;
        	
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
                this.ranges.push(new DynamicRange(range));
            } else
                this.ranges.push(new DynamicRange(range));
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
        this.setValue(message.value);
    }

    setValue(v){
        var newValue = v;
        if (this.qtyUnitTo){
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
        } 
        
        this.value$.next(newValue)

        var spl=this.sparkline$.value;
        spl.push(newValue);
        if (spl.length>10)
             spl.shift();
        this.sparkline$.next(spl);  
        
    }
}

export class DynamicStringModel extends DynamicValue<string> {
    
    protected getDefaultValue():string{
        return "";
    }

    constructor(message: any) {
        super(message)
    }
    
}

export class DynamicBooleanModel extends DynamicValue<boolean> {
    constructor(message) {
        super(message)
    }

    protected getDefaultValue():boolean{
        return false;
    }
}

export class DynamicDateTimeModel extends DynamicValue<Date> {
    public subType: string;
    
    constructor(message) {
        super(message)
        this.subType = message.inputType;
    }

    protected getDefaultValue():Date{
        return new Date();
    }
    
}

export class DynamicColorModel extends DynamicValue<string> {
    
    constructor(message) {
        super(message)
    }

    protected getDefaultValue():string{
        return "#ffffff";
    }    
}