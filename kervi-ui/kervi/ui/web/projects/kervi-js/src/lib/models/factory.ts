
import  * as KerviValues from './KerviValues.model'
import { ControllerModel } from './controller.model'
import { DashboardModel } from './dashboard.model'
import { ActionModel } from './action.model'
import { IComponent } from './IComponent.model';
import { KerviBaseService } from '../kervi-js.service'

export class ComponentFactory{

    public static createComponents(message: any, kerviService:KerviBaseService){
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
            } else if (message.componentType=="controller")
                component = new ControllerModel(message);
            else if (message.componentType == "boolean-value")
                component = new KerviValues.KerviBooleanModel(message);
            else if (message.componentType == "number-value")
                component = new KerviValues.KerviNumberModel(message, kerviService);
            else if (message.componentType == "string-value")
                component = new KerviValues.KerviStringModel(message);
            else if (message.componentType == "enum-value")
                component = new KerviValues.KerviEnumModel(message);
            else if (message.componentType == "datetime-value")
                component = new KerviValues.KerviDateTimeModel(message);
            else if (message.componentType == "color-value")
                component = new KerviValues.KerviColorModel(message);
            
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