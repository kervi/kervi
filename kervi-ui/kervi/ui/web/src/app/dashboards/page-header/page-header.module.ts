import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { RouterModule } from '@angular/router';
@NgModule({
  exports:[
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
