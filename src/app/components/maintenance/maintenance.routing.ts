import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyncMainComponent } from './subcomponents/sync-main.component';
const syncRoutes: Routes = [
    { path : 'sync' , component : SyncMainComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(syncRoutes) ],
     exports: [ RouterModule ]
 })

export class MaintenanceRouting {}