// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { IComponent, DashboardLink } from './IComponent.model'


export class DashboardSizes{
    public valueWidth:string ='3rem';
    public buttonWidth:string = '25px';
    public buttonHeight:string = '';
    public switchWidth:string = '25px';
    public switchHeight:string = '25px';
    public gaugeWidth:string = '100px';
    public gaugeHeight:string = '200px';
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

export class DashboardPanelComponent{
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

export class DashboardPanelParameters{
    public title: string = null;
    public width: string = null;
    public height: string = null;
    public type: string = null;
    public userLog: boolean = null;
    public appHealth: boolean = null;
    public logLength = 5;
    public layout = 'row';

    constructor(messageParameters) {
        this.title = messageParameters.label;
        this.height = this.calcSize(messageParameters.height);
        this.width = this.calcSize(messageParameters.width);
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        this.appHealth = messageParameters.app_health;

        if (messageParameters.type) {
            this.type = messageParameters.type;
        }
        if (messageParameters.layout) {
            this.layout = messageParameters.layout;
        }
    }

    private calcSize(value){
        if (value==null)
            return ''
        else if (value==='')
            return ''
        else if (isNaN(value)){
            return value;
        } else
            if (value>0)
                return value + '%';
            else
                return '';
    }
}

export class DashboardPanel {
    public id:string;
    public name:string;
    public parameters: DashboardPanelParameters;
    public components: DashboardPanelComponent[]=[];
    public dashboard: Dashboard;
    public type:string;
    public subPanels: DashboardPanel[] = [];
    public hasOnlyGroupPanels:boolean = true;
    
    constructor (dashboard, messagePanel) {
        this.dashboard=dashboard;
        this.id=messagePanel.id;
        this.name=messagePanel.name;
        this.type=messagePanel.type;
        this.parameters=new DashboardPanelParameters(messagePanel.uiParameters);
        /*if (messagePanel.components)
            for(var componentRef of messagePanel.components){
                this.components.push(new DashboardPanelComponentModel(componentRef))
            }*/
        
        if (messagePanel.panels){
            //console.log('spa',messagePanel.panels);
            for(var subMessagePanel of messagePanel.panels){
                var panel=new DashboardPanel(this, subMessagePanel);
                this.subPanels.push(panel);
                if (panel.type !== 'group')
                    this.hasOnlyGroupPanels = false;
            }
        }
    }

    public reload(source:DashboardPanel){
        //console.log('rl', this);
        for(var subPanel of source.subPanels){
            this.reload(subPanel)
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
        var deleteComponents:DashboardPanelComponent[] = [];
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
        //console.log('dsc',deleteComponents);
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

export class Dashboard implements IComponent{
    public id:string;
    public name:string;
    public componentType:string;
    public type:string;
    public isDefault:Boolean;
    public template:string;
    public panels:DashboardPanel[];
    public sysPanels:DashboardPanel[];
    public headerPanel: DashboardPanel=null;
    public footerCenterPanel: DashboardPanel=null;
    public footerLeftPanel: DashboardPanel=null;
    public footerRightPanel: DashboardPanel=null;
    public sysPanel: DashboardPanel=null;
    public backgroundPanel: DashboardPanel=null;
    public controllerPanel: DashboardPanel=null;
    public LeftPadXPanel: DashboardPanel=null;
    public LeftPadYPanel: DashboardPanel=null;
    public RightPadXPanel: DashboardPanel=null;
    public RightPadYPanel: DashboardPanel=null;
    //public background: DashboardBackgroundModel=null;
    public unitSize: number;

    //not used in dashboards
    public visible:boolean;
    public ui:any;
    public dashboards:any[] = [];

    private currentPanel:DashboardPanel = null;
 
    constructor(message){
        this.id=message.id;
        this.name=message.name;
        this.componentType='dashboard';
        this.type=message.type;
        this.isDefault=message.isDefault;
        this.template=message.template;
        this.unitSize=message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.panels=[];
        this.sysPanels=[];
        if (!this.template){
            
            for (let messagePanel of message.sections){
                if (!messagePanel){
                    console.log('dashboard with null panel', this.id);
                    continue;
                }
                var panel = new DashboardPanel(this, messagePanel);
                var sysPanel = true;
                if (panel.id=='header_center')
                    this.headerPanel=panel;
                else if (panel.id=='footer_left')
                    this.footerLeftPanel=panel;
                else if (panel.id=='footer_center')
                    this.footerCenterPanel=panel;
                else if (panel.id=='footer_right')
                    this.footerRightPanel=panel;
                else if (panel.id=='header_right')
                    this.sysPanel=panel;
                else if (panel.id=='controllers')
                    this.controllerPanel=panel;
                else if (panel.id=='background')
                    this.backgroundPanel=panel;
                else if (panel.id=='left_pad_x')
                    this.LeftPadXPanel=panel;
                else if (panel.id=='left_pad_y')
                    this.LeftPadYPanel=panel;
                else if (panel.id=='right_pad_x')
                    this.RightPadXPanel=panel;
                else if (panel.id=='right_pad_y')
                    this.RightPadYPanel=panel;
                else{
                    sysPanel=false;
                    if (panel.type!='group'){
                        if(this.currentPanel==null){
                            this.currentPanel = new DashboardPanel(
                            this,
                            {
                                'id':null,
                                'name': '',
                                'type':'group',
                                'components':[],
                                'panels':[],
                                'uiParameters':{
                                    'title':'',
                                    'width':100,
                                    'height':0,
                                    'userLog':false,
                                    'logLength':0
                                }    
                            });
                            this.currentPanel.subPanels.push(panel);
                            this.panels.push(this.currentPanel);
                        } else {
                            this.currentPanel.subPanels.push(panel)
                        }
                    }   
                    else{
                        this.panels.push(panel);
                        this.currentPanel=null;
                    }
                }
                if (sysPanel)
                    this.sysPanels.push(panel);      
            }

            if (!this.currentPanel){
                this.currentPanel = new DashboardPanel(
                    this,
                    {
                        'id':null,
                        'name': '',
                        'type':'group',
                        'components':[],
                        'panels':[],
                        'uiParameters':{
                            'title':'',
                            'width':100,
                            'height':0,
                            'userLog':false,
                            'logLength':0
                        }    
                    });
                    //this.currentPanel.subPanels.push(panel);
                    this.panels.push(this.currentPanel);
            }
        }
    }
    public isEmpty(){
        return this.panels.length == 0;
    }
    removeReferences(deleteComponents:IComponent[]){};
    updateReferences(){};
    reload(component:IComponent){
        var source = component as Dashboard;
        if (!this.backgroundPanel && source.backgroundPanel)
            this.backgroundPanel=source.backgroundPanel;
        else if (this.backgroundPanel && !source.backgroundPanel)
            this.backgroundPanel = null
        else if (this.backgroundPanel)
            this.backgroundPanel.reload(source.backgroundPanel)

        if (!this.footerLeftPanel && source.footerLeftPanel)
            this.footerLeftPanel=source.footerLeftPanel;
        else if (this.footerLeftPanel && !source.footerLeftPanel)
            this.footerLeftPanel = null
        else if (this.footerLeftPanel)
            this.footerLeftPanel.reload(source.footerLeftPanel)

        if (!this.footerRightPanel && source.footerRightPanel)
            this.footerRightPanel=source.footerRightPanel;
        else if (this.footerRightPanel && !source.footerRightPanel)
            this.footerRightPanel = null
        else if (this.footerRightPanel)
            this.footerRightPanel.reload(source.footerRightPanel)

        if (!this.footerCenterPanel && source.footerCenterPanel)
            this.footerCenterPanel=source.footerCenterPanel;
        else if (this.footerCenterPanel && !source.footerCenterPanel)
            this.footerCenterPanel = null
        else if (this.footerCenterPanel)
            this.footerCenterPanel.reload(source.footerCenterPanel)

        /*if (!this.headerPanel && source.headerPanel)
            this.headerPanel=source.headerPanel;
        else if (this.headerPanel && !source.headerPanel)
            this.headerPanel = null
        else if (this.headerPanel)
            this.headerPanel.reload(source.headerPanel)*/

        if (!this.sysPanel && source.sysPanel)
            this.sysPanel=source.sysPanel;
        else if (this.sysPanel && !source.sysPanel)
            this.sysPanel = null
        else if (this.sysPanel)
            this.sysPanel.reload(source.sysPanel)

        if (!this.LeftPadXPanel && source.LeftPadXPanel)
            this.LeftPadXPanel=source.LeftPadXPanel;
        else if (this.LeftPadXPanel && !source.LeftPadXPanel)
            this.LeftPadXPanel = null
        else if (this.LeftPadXPanel)
            this.LeftPadXPanel.reload(source.LeftPadXPanel)

        if (!this.LeftPadYPanel && source.LeftPadYPanel)
            this.LeftPadYPanel=source.LeftPadYPanel;
        else if (this.LeftPadYPanel && !source.LeftPadYPanel)
            this.LeftPadYPanel = null
        else if (this.LeftPadYPanel)
            this.LeftPadYPanel.reload(source.LeftPadYPanel)

        if (!this.RightPadXPanel && source.RightPadXPanel)
            this.RightPadXPanel=source.RightPadXPanel;
        else if (this.RightPadXPanel && !source.RightPadXPanel)
            this.RightPadXPanel = null
        else if (this.RightPadXPanel)
            this.RightPadXPanel.reload(source.RightPadXPanel)

        if (!this.RightPadYPanel && source.RightPadYPanel)
            this.RightPadYPanel=source.RightPadYPanel;
        else if (this.RightPadYPanel && !source.RightPadYPanel)
            this.RightPadYPanel = null
        else if (this.RightPadYPanel)
            this.RightPadYPanel.reload(source.RightPadYPanel)

        if (!this.controllerPanel && source.controllerPanel)
            this.controllerPanel=source.controllerPanel;
        else if (this.controllerPanel && !source.controllerPanel)
            this.controllerPanel = null
        else if (this.controllerPanel)
            this.controllerPanel.reload(source.controllerPanel)
    };

    private getDashboardPanelById(id:string, panels:DashboardPanel[]){
        for(let panel of panels){
            if (panel.id == id)
                return panel; 
            else{
                var res = this.getDashboardPanelById(id, panel.subPanels);
                if (res)
                    return res;
            }
        } 
        return null;
    }

    public addDashboardLink(link:DashboardLink){
        if (link.dashboardId == '*' || link.dashboardId == this.id || (link.dashboardId=='**default**' && this.isDefault)){
            var panelFound = false;
            var panel = this.getDashboardPanelById(link.panelId, this.panels);
            if (!panel)
                panel = this.getDashboardPanelById(link.panelId, this.sysPanels);
            if (panel){
                panel.components.push(new DashboardPanelComponent(link));
            } else {
                // console.log('adh',link);
                var messagePanel ={
                    id:link.panelId,
                    name:link.panelName,
                    type:'panel',
                    uiParameters:{
                        'title':'',
                        'width':0,
                        'height':0,
                        'userLog':false,
                        'logLength':0
                    }
                }
                var newPanel = new DashboardPanel(this, messagePanel);
                this.currentPanel.subPanels.push(newPanel);
                newPanel.components.push(new DashboardPanelComponent(link));
            }
        }
    }
}