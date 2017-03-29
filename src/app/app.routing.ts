import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyncParentComponent } from './synchronization/sync.parent.component';

const appRoutes: Routes = [
    { path: 'sync', component: SyncParentComponent},
    { path: '', redirectTo: 'project-tracker', pathMatch: 'full' }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}