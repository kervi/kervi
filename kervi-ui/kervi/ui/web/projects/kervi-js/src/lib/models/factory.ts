
import * as KerviValues from './KerviValues.model';
import { Controller } from './controller.model';
import { Dashboard } from './dashboard.model';
import { Action } from './action.model';
import { IComponent } from './IComponent.model';
import { KerviBaseService } from '../kervi-js.service';

export class ComponentFactory {

    public static createComponents(message: any, kerviService: KerviBaseService) {
        const foundComponents = this.createComponentsRec(message, kerviService);
        this.linkToDashboards(foundComponents[0], foundComponents[1]);
        return foundComponents[0];
    }

    private static createComponentsRec(message: any, kerviService) {
        let result = [];
        let dashboards = [];
        if (Array.isArray(message)) {
            for (let i = 0; (i < message.length); i++) {
                const subComponents = this.createComponentsRec(message[i], kerviService);
                result = result.concat(subComponents[0]);
                dashboards = dashboards.concat(subComponents[1]);
            }
        } else {
            let component: any = null;
            const subComponents: any[] = [];
            if (message.componentType === 'KerviAction') {
                component = new Action(message, kerviService);
            } else if (message.componentType === 'dashboard') {
                component = new Dashboard(message);
                dashboards.push(component);
            } else if (message.componentType === 'controller') {
                component = new Controller(message, kerviService);
            } else if (message.componentType === 'boolean-value') {
                component = new KerviValues.BooleanValue(message, kerviService);
            } else if (message.componentType === 'number-value') {
                component = new KerviValues.NumberValue(message, kerviService);
            } else if (message.componentType === 'string-value') {
                component = new KerviValues.StringValue(message, kerviService);
            } else if (message.componentType === 'enum-value') {
                component = new KerviValues.SelectValue(message, kerviService);
            } else if (message.componentType === 'datetime-value') {
                component = new KerviValues.DateTimeValue(message, kerviService);
            } else if (message.componentType === 'color-value') {
                component = new KerviValues.ColorValue(message, kerviService);
            }
            if (component) {
                result.push(component);
            }
            if (subComponents) {
                for (let subComponent of subComponents) {
                    result.push(subComponent);
                }
            }
        }
        return [result, dashboards];
    }

    public static FixControllerReferences(components: IComponent[]){
        for (let component of components) {
            const controller = component as Controller;
            if (controller && controller.componentType === 'controller') {
                controller.updateReferences();
            }
        }
    }

    private static linkToDashboards(components: IComponent[], dashboards: Dashboard[]) {
        console.log('ltd', components, dashboards);
        for (let component of components) {
            if (!(component instanceof Dashboard)) {
                for (let link of component.dashboards) {
                    for (let dashboard of dashboards) {
                        dashboard.addDashboardLink(link);
                    }
                }
            }
        }
    }
}
