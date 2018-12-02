
export class DashboardLink{
    dashboardId:string;
    panelId:string;
    panelName:string;
    component:IComponent;
    parameters:any;

    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/

    constructor(component:IComponent, message:any){
        this.dashboardId = message.dashboardId;
        this.panelId = message.sectionId;
        this.panelName = message.sectionName;
        this.component = component;
        this.parameters = message.parameters;
    }
}

export interface IComponent {
    id: string;
    name: string;
    componentType: string;
    ui:any;
    dashboards : DashboardLink[];

    //updateReferences(kerviService:KerviBaseService);
    //reload(component:IComponent);
    //removeReferences(components:IComponent[]);
}