import { KerviService } from '../kervi.service'

export class DashboardLink{
    dashboardId:string;
    sectionId:string;
    sectionName:string;
    component:IComponent;
    parameters:any;

    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/

    constructor(component:IComponent, message:any){
        this.dashboardId = message.dashboardId;
        this.sectionId = message.sectionId;
        this.sectionName = message.sectionName;
        this.component = component;
        this.parameters = message.parameters;
    }
}

export interface IComponent {
    id: string;
    name: string;
    visible: boolean;
    componentType: string;
    ui:any;
    dashboards : DashboardLink[];

    updateReferences(kerviService:KerviService);
    reload(component:IComponent);
    removeReferences(components:IComponent[]);
}