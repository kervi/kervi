
import  * as DynamicValues from './dynamicValues.model'
import { ControllerModel } from './controller.model'
import { SensorModel } from './sensor.model'
import { DashboardModel } from './dashboard.model'
import { ActionModel } from './action.model'
import { IComponent } from './IComponent.model';
import { KerviService } from '../kervi.service'

export class ComponentFactory{

    public static createComponents(message: any, kerviService:KerviService){
        var foundComponents =this.createComponentsRec(message, kerviService);
        this.linkToDashboards(foundComponents[0], foundComponents[1]);
        return foundComponents[0];
    }

    private static createComponentsRec(message: any, kerviService){
        var result=[];
        var dashboards=[];
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                subComponents = this.createComponentsRec(message[i], kerviService);
                result=result.concat(subComponents[0]);
                dashboards=dashboards.concat(subComponents[1]);
            }
        } else {
            var component:any=null;
            var subComponents:any[] = [];
            if (message.componentType=="KerviAction")
                component = new ActionModel(message);
            else if (message.componentType=="dashboard"){
                component = new DashboardModel(message);
                dashboards.push(component);
            } else if (message.componentType=="sensor"){
                component = new SensorModel(message, kerviService);
                subComponents = component.subSensors;
            }else if (message.componentType=="controller")
                component = new ControllerModel(message);
            else if (message.componentType == "boolean-value")
                component = new DynamicValues.DynamicBooleanModel(message);
            else if (message.componentType == "number-value")
                component = new DynamicValues.DynamicNumberModel(message, kerviService);
            else if (message.componentType == "string-value")
                component = new DynamicValues.DynamicStringModel(message);
            else if (message.componentType == "enum-value")
                component = new DynamicValues.DynamicEnumModel(message);
            else if (message.componentType == "datetime-value")
                component = new DynamicValues.DynamicDateTimeModel(message);
            else if (message.componentType == "color-value")
                component = new DynamicValues.DynamicColorModel(message);
            
            if (component)
                result.push(component);
            
            if (subComponents){
                for(let subComponent of subComponents){
                    result.push(subComponent);
                }
            }
        }
        return [result, dashboards];    
    }

    private static linkToDashboards(components:IComponent[], dashboards:DashboardModel[]){
        console.log("ltd", components, dashboards);
        
        for(let component of components){
            if (!(component instanceof DashboardModel)){
                for(let link of component.dashboards){
                    for(let dashboard of dashboards){
                        dashboard.addDashboardLink(link);
                    }
                }
            }    
        }
    }
}