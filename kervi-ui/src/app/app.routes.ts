// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { CamBoardComponent } from './dashboards/cam-board/cam-board.component';
import { ChartsComponent } from './charts/charts.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  },
  { path: 'connect', component: ConnectComponent },
  { path: 'camboard/:name', component: CamBoardComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
  { path: 'charts', component: ChartsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);