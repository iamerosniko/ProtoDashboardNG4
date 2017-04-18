import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
// ngx-components
import { TabsModule } from 'ngx-bootstrap';
//Components
import { SyncMainComponent } from './subcomponents/sync-main.component';
import { MaintenanceComponent } from './maintenance.component';
//functions (providers)
import { FnMain } from './functions/fn-main';
//services
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { MaintenanceRouting } from './maintenance.routing';
@NgModule({
    imports: [
        TabsModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpModule,
        // TabsModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // Ng2GoogleChartsModule,
        // Ng2DatetimePickerModule
        MaintenanceRouting,
    ],
    declarations: [
        MaintenanceComponent,
        SyncMainComponent,
        
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ApplicationService,
        AppUserService,
        FnMain
    ]
})

export class MaintenanceModule {}