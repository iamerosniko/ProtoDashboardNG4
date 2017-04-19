import { Component,OnInit } from '@angular/core';
import { FnUser } from './../functions/fn-user';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../entities/application';
import { TempProject } from '../../../entities/tempproject';
@Component({
    moduleId: module.id,
    selector: 'sync-comp',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-main.component.html',
})
export class SyncMainComponent implements OnInit  { 
    name = 'Sync page';
    newApps:TempProject[]=[];
    constructor(
        private fnUser : FnUser,
    ){ }

    ngOnInit(){
        //this.initAppUserSync();
    }

    initProjectUserSync(project:Application):void{
        this.fnUser.getUsersFromWDSB(app.).then();
    }

    deleteOldUsers(appID: number):void {
        this.fnUser.deleteUsers(this.fnUser.getUsersFromWDSB(appID));
    }

    getNewUsers(app:Application):boolean{
        return (this.fnUser.postUsers(this.fnUser.getUsersFromApplications(app)));
    } 
}