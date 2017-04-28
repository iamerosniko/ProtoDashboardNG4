import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
/* ngx-bootstrap */
import { AccordionModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
//Components
import { MaintenanceComponent } from './maintenance.component';
/*Applications */
import { AppListComponent } from './subcomponents/applications/app-list.component';
import { AppFormComponent } from './subcomponents/applications/app-form.component';
/*BU*/
import { BUListComponent } from './subcomponents/bu/bu-list.component';
import { BUFormComponent } from './subcomponents/bu/bu-form.component';
/*Contacts*/
import { ContactListComponent } from './subcomponents/contacts/contact-list.component';
import { ContactFormComponent } from './subcomponents/contacts/contact-form.component';
/*Project-sync*/
import { SyncMainComponent } from './subcomponents/project-sync/sync-main.component';
/*user-sync*/
import { SyncUserComponent } from './subcomponents/user-sync/sync-user.component';
//functions (providers)
import { FnMain } from './functions/fn-main';
import { FnUser } from './functions/fn-user';
import { FnBU } from './functions/fn-bu';
import { FnContact } from './functions/fn-contact';
//services
import { BTSSWDSBService } from '../../services/btss-wdsb.service';
import { TempProjectService } from '../../services/temp-project.service';
import { ProjectService } from '../../services/project.service';
import { ApplicationService } from '../../services/application.service';
import { AppUserService } from '../../services/app-user.service';
import { BUService } from '../../services/bu.service';
import { ContactService } from '../../services/contact.service';
//routing
import { MaintenanceRouting } from './maintenance.routing';BUService
@NgModule({
    imports: [
        ProgressbarModule.forRoot(),
        AccordionModule.forRoot(), 
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
        AppListComponent,
        AppFormComponent,
        BUListComponent,
        BUFormComponent,
        ContactListComponent,
        ContactFormComponent,
        SyncMainComponent,
        SyncUserComponent,
    ],
    providers: [
        BTSSWDSBService,
        TempProjectService,
        ProjectService,
        ApplicationService,
        AppUserService,
        BUService,
        ContactService,
        FnMain,
        FnUser,
        FnBU,
        FnContact
        
    ]
})

export class MaintenanceModule {}