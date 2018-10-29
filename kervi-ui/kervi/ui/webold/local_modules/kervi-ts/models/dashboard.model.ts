// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { IComponent, DashboardLink } from './IComponent.model'


export class DashboardSizes{
    public valueWidth:string ="3rem";
    public buttonWidth:string = "25px";
    public buttonHeight:string = "";
    public switchWidth:string = "25px";
    public switchHeight:string = "25px";
    public gaugeWidth:string = "100px";
    public gaugeHeight:string = "200px";
}

export class DashboardMessageModel{
    public sourceId:string;
    public sourceName:string;
    public area: string;
    public level: number;
    public timestamp: Date;
    public topic:string;
    public body:string;
    public type:string;

    constructor(message){
        this.timestamp = new Date(message.timestamp*1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
        this.sourceId = message.source_id;
        this.sourceName = message.source_name;
        this.area = message.area;
        this.level = message.level;
    }
}

export class DashboardSectionComponentModel{
    public component:IComponent;
    public componentId:string;
    public linkId:any;
    public parameters:any;

    constructor(private message: any){
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.component = message.component;
        this.parameters = message.parameters;
    }
}

export class DashboardSectionParametersModel{
    public title:string = null;
    public width:string = null;
    public height:string = null;
    public type:string = null;
    public userLog: boolean = null;
    public logLength:number = 5;
    
    constructor(messageParameters){
        this.title=messageParameters.label;
        this.height=messageParameters.height;
        this.width=messageParameters.width;
        this.userLog=messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        
        if (messageParameters.type)
            this.type=messageParameters.type;
    }
}

export class DashboardSectionModel{
    public id:string;
    public name:string;
    public parameters: DashboardSectionParametersModel;
    public components: DashboardSectionComponentModel[]=[];
    public dashboard: DashboardModel;
    public type:string;
    public subSections: DashboardSectionModel[] = [];
    
    constructor (dashboard, messageSection){
        this.dashboard=dashboard;
        this.id=messageSection.id;
        this.name=messageSection.name;
        this.type=messageSection.type;
        this.parameters=new DashboardSectionParametersModel(messageSection.uiParameters);
        /*if (messageSection.components)
            for(var componentRef of messageSection.components){
                this.components.push(new DashboardSectionComponentModel(componentRef))
            }*/
        
        if (messageSection.panels){
            //console.log("spa",messageSection.panels);
            for(var subMessageSection of messageSection.panels){
                var section=new DashboardSectionModel(this, subMessageSection);
                this.subSections.push(section);
            }
        }
    }

    public reload(source:DashboardSectionModel){
        //console.log("rl", this);
        for(var subSection of source.subSections){
            this.reload(subSection)
        }
        for(var sourceComponent of source.components){
            var found=false;
            for(var component of this.components){
                if (component.componentId == sourceComponent.componentId){
                    found=true;
                }
            }
            if (!found){
                this.components.push(sourceComponent);
            }
        }
        var deleteComponents:DashboardSectionComponentModel[] = [];
        for (var component of this.components){
            var found=false;
            for(var sourceComponent of source.components){
                if (sourceComponent.componentId == component.componentId){
                    found=true;
                    break;
                }
            }
            if (!found)
                deleteComponents.push(component);
        }
        //console.log("dsc",deleteComponents);
        for(var component of deleteComponents){
            this.components.splice( this.components.indexOf(component), 1 );
        }
    }
}

export class DashboardBackgroundModel{
    public type:string;
    public cameraId:string;
    public image:string;

    constructor(message){
        this.type=message.type;
        this.cameraId=message.cameraId
    }
}

export class DashboardModel implements IComponent{
    public id:string;
    public name:string;
    public componentType:string;
    public type:string;
    public isDefault:Boolean;
    public template:string;
    public sections:DashboardSectionModel[];
    public sysSections:DashboardSectionModel[];
    public headerSection: DashboardSectionModel=null;
    public footerCenterSection: DashboardSectionModel=null;
    public footerLeftSection: DashboardSectionModel=null;
    public footerRightSection: DashboardSectionModel=null;
    public sysSection: DashboardSectionModel=null;
    public backgroundSection: DashboardSectionModel=null;
    public controllerSection: DashboardSectionModel=null;
    public LeftPadXSection: DashboardSectionModel=null;
    public LeftPadYSection: DashboardSectionModel=null;
    public RightPadXSection: DashboardSectionModel=null;
    public RightPadYSection: DashboardSectionModel=null;
    //public background: DashboardBackgroundModel=null;
    public unitSize: number;
    
    //not used in dashboards
    public visible:boolean;
    public ui:any;
    public dashboards:any[] = [];



    constructor(message){
        this.id=message.id;
        this.name=message.name;
        this.componentType="dashboard";
        this.type=message.type;
        this.isDefault=message.isDefault;
        this.template=message.template;
        this.unitSize=message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.sections=[];
        this.sysSections=[];
        if (!this.template){
            var currentSection:DashboardSectionModel = null;
            for (let messageSection of message.sections){
                if (!messageSection){
                    console.log("dashboard with null section", this.id);
                    continue;
                }
                var section = new DashboardSectionModel(this, messageSection);
                var sysSection = true;
                if (section.id=="header_center")
                    this.headerSection=section;
                else if (section.id=="footer_left")
                    this.footerLeftSection=section;
                else if (section.id=="footer_center")
                    this.footerCenterSection=section;
                else if (section.id=="footer_right")
                    this.footerRightSection=section;
                else if (section.id=="header_right")
                    this.sysSection=section;
                else if (section.id=="controllers")
                    this.controllerSection=section;
                else if (section.id=="background")
                    this.backgroundSection=section;
                else if (section.id=="left_pad_x")
                    this.LeftPadXSection=section;
                else if (section.id=="left_pad_y")
                    this.LeftPadYSection=section;
                else if (section.id=="right_pad_x")
                    this.RightPadXSection=section;
                else if (section.id=="right_pad_y")
                    this.RightPadYSection=section;
                else{
                    sysSection=false;
                    if (section.type!="group"){
                        if(currentSection==null){
                            currentSection = new DashboardSectionModel(
                            this,
                            {
                                "id":null,
                                "name": "",
                                "type":"group",
                                "components":[],
                                "panels":[],
                                "uiParameters":{
                                    "title":"",
                                    "width":0,
                                    "height":0,
                                    "userLog":false,
                                    "logLength":0
                                }    
                            });
                            currentSection.subSections.push(section);
                            this.sections.push(currentSection);
                        } else {
                            currentSection.subSections.push(section)
                        }
                    }   
                    else{
                        this.sections.push(section);
                        currentSection=null;
                    }
                }
                if (sysSection)
                    this.sysSections.push(section);      
            }
        }
    }

    /*removeSectionRef(deleteComponents:IComponent[], section:DashboardSectionModel, removeEmpty:boolean){
        var removeComponentSections:DashboardSectionComponentModel[] = [];
        for(var sectionComponent of section.components){
            for(var deleteComponent of deleteComponents){
                if (deleteComponent.id == sectionComponent.component.id){
                    console.log("dlc", sectionComponent)
                    removeComponentSections.push(sectionComponent)
                    
                }
            }
        }
        for(var component of removeComponentSections){
            section.components.splice(section.components.indexOf(component))
        }
        var removeSections:DashboardSectionModel[] = [];
        for(var subSection of section.subSections){
            this.removeSectionRef(deleteComponents, subSection, removeEmpty)
            if (subSection.components.length == 0){
                removeSections.push(subSection)
            }
        }
        for(var subSection of removeSections){
            section.subSections.splice(section.subSections.indexOf(subSection))
        }
    }*/

    removeReferences(deleteComponents:IComponent[]){
        // console.log("remove ref", deleteComponents)
        // for(var section of this.sysSections){
        //     this.removeSectionRef(deleteComponents, section, false)
        // }
        // var removeSections:DashboardSectionModel[] = [];
        // for(var section of this.sections){
        //     this.removeSectionRef(deleteComponents, section, true)
        //     if (section.components.length == 0)
        //         removeSections.push(section)
        // }
        // for(var section of removeSections){
        //     this.sections.splice(this.sections.indexOf(section))
        // }
    };
    updateReferences(){};
    reload(component:IComponent){
        var source = component as DashboardModel;
        if (!this.backgroundSection && source.backgroundSection)
            this.backgroundSection=source.backgroundSection;
        else if (this.backgroundSection && !source.backgroundSection)
            this.backgroundSection = null
        else if (this.backgroundSection)
            this.backgroundSection.reload(source.backgroundSection)

        if (!this.footerLeftSection && source.footerLeftSection)
            this.footerLeftSection=source.footerLeftSection;
        else if (this.footerLeftSection && !source.footerLeftSection)
            this.footerLeftSection = null
        else if (this.footerLeftSection)
            this.footerLeftSection.reload(source.footerLeftSection)

        if (!this.footerRightSection && source.footerRightSection)
            this.footerRightSection=source.footerRightSection;
        else if (this.footerRightSection && !source.footerRightSection)
            this.footerRightSection = null
        else if (this.footerRightSection)
            this.footerRightSection.reload(source.footerRightSection)

        if (!this.footerCenterSection && source.footerCenterSection)
            this.footerCenterSection=source.footerCenterSection;
        else if (this.footerCenterSection && !source.footerCenterSection)
            this.footerCenterSection = null
        else if (this.footerCenterSection)
            this.footerCenterSection.reload(source.footerCenterSection)

        /*if (!this.headerSection && source.headerSection)
            this.headerSection=source.headerSection;
        else if (this.headerSection && !source.headerSection)
            this.headerSection = null
        else if (this.headerSection)
            this.headerSection.reload(source.headerSection)*/

        if (!this.sysSection && source.sysSection)
            this.sysSection=source.sysSection;
        else if (this.sysSection && !source.sysSection)
            this.sysSection = null
        else if (this.sysSection)
            this.sysSection.reload(source.sysSection)

        if (!this.LeftPadXSection && source.LeftPadXSection)
            this.LeftPadXSection=source.LeftPadXSection;
        else if (this.LeftPadXSection && !source.LeftPadXSection)
            this.LeftPadXSection = null
        else if (this.LeftPadXSection)
            this.LeftPadXSection.reload(source.LeftPadXSection)

        if (!this.LeftPadYSection && source.LeftPadYSection)
            this.LeftPadYSection=source.LeftPadYSection;
        else if (this.LeftPadYSection && !source.LeftPadYSection)
            this.LeftPadYSection = null
        else if (this.LeftPadYSection)
            this.LeftPadYSection.reload(source.LeftPadYSection)

        if (!this.RightPadXSection && source.RightPadXSection)
            this.RightPadXSection=source.RightPadXSection;
        else if (this.RightPadXSection && !source.RightPadXSection)
            this.RightPadXSection = null
        else if (this.RightPadXSection)
            this.RightPadXSection.reload(source.RightPadXSection)

        if (!this.RightPadYSection && source.RightPadYSection)
            this.RightPadYSection=source.RightPadYSection;
        else if (this.RightPadYSection && !source.RightPadYSection)
            this.RightPadYSection = null
        else if (this.RightPadYSection)
            this.RightPadYSection.reload(source.RightPadYSection)

        if (!this.controllerSection && source.controllerSection)
            this.controllerSection=source.controllerSection;
        else if (this.controllerSection && !source.controllerSection)
            this.controllerSection = null
        else if (this.controllerSection)
            this.controllerSection.reload(source.controllerSection)
    };

    private getDashboardSectionById(id:string, sections:DashboardSectionModel[]){
        for(let section of sections){
            if (section.id == id)
                return section; 
            else{
                var res = this.getDashboardSectionById(id, section.subSections);
                if (res)
                    return res;
            }
        } 
        return null;
    }

    public addDashboardLink(link:DashboardLink){
        if (link.dashboardId == "*" || link.dashboardId == this.id || (link.dashboardId=="**default**" && this.isDefault)){
            var sectionFound = false;
            var section = this.getDashboardSectionById(link.sectionId, this.sections);
            if (!section)
                section = this.getDashboardSectionById(link.sectionId, this.sysSections);
            if (section){
                section.components.push(new DashboardSectionComponentModel(link));
            } else {
                console.log("adh",link);
                var messageSection ={
                    id:link.sectionId,
                    name:link.sectionName,
                    type:"panel",
                    uiParameters:{
                        "title":"",
                        "width":0,
                        "height":0,
                        "userLog":false,
                        "logLength":0
                    }
                }
                var newSection = new DashboardSectionModel(this, messageSection);
                this.sections.push(newSection);
                newSection.components.push(new DashboardSectionComponentModel(link));
            }
        }
    }
}