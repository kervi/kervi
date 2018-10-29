import { Injectable } from '@angular/core';
import { KerviService } from "./kervi.service"
import { DashboardsService } from './dashboards/dashboards.service'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TemplateService {

    private remUnit:number=20;
    constructor() 
  { 
    console.log("kervi service constructor");
        //console.log("ctemplate");
        this.remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize)
    }
    
    public convertRemToPixels(rem) {    
        return rem * this.remUnit;
    }

    public getSizeValue(value){
        if (value==null)
            return "100%"
        else if (isNaN(value)){
            return value;
        } else
            if (value>0)
                return value + "%";
            else
                return "";
    }

    public  getPixels(value, containerSize){
        //console.log("gps", value, isNaN(value));
        if (isNaN(value)){
          if (value.lastIndexOf("px")>-1){
            var px = parseFloat(value);
            return px;
          } else if (value.lastIndexOf("rem")>-1){
            var rem = parseFloat(value);
            var px = this.convertRemToPixels(rem);
            console.log("remx",rem, px);
            return px;
          } else if (value.lastIndexOf("%")>-1){
            var percentage = parseFloat(value)/100.0;
            return containerSize * percentage;
          }
        } else 
          return value;
      }

    private getStyleRuleValue(style, selector, sheet) {
        var sheets = sheet!=null ? [sheet] : document.styleSheets;
        for (var i = 0, l = sheets.length; i < l; i++) {
            
            var sheet = sheets[i];
            if( !sheet.cssRules ) { continue; }
            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                var rule = sheet.cssRules[j];
                if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                    return rule.style[style];
                }
            }
        }
        return null;
    }

    public makeId()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    public getColor(colorName:string,cssClass:string){
        var styleValue=this.getStyleRuleValue(colorName,cssClass,null);
        //console.log("sv", cssClass,styleValue);
        return styleValue;
    }
}