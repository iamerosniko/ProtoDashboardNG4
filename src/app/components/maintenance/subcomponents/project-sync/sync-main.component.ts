import { Component,OnInit,Input } from '@angular/core';
import { FnMain } from '../../functions/fn-main';
import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../../../../services/project.service';
//entities
import { Application } from '../../../../entities/application';
import { Project } from '../../../../entities/project';

import { MaintenanceComponent } from '../../maintenance.component';
import { PaginationInstance } from 'ngx-pagination';
@Component({
    moduleId: module.id,
    selector: 'proj-sync',
    // template: `<h1>Hello {{name}}</h1>
    //     <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
    //     <i class="glyphicon glyphicon-refresh"></i>  Refresh
    //     </a>`,
    templateUrl: 'sync-main.component.html',
})
export class SyncMainComponent implements OnInit  {
    @Input() mainView:MaintenanceComponent;
    appLength:number=0;
    appDetailCompleted:number=0;
    newApps:Project[]=[];
    syncApps:Project[]=[];
    constructor(
        private fnMain : FnMain,
        private projectService : ProjectService
    ){
    //     setInterval(() => {
    //         this.checkComplete();
    //  }, 1000);
    }
    //wait page
    viewLoading(){
      this.mainView.viewLoading();
    }
    //pagination
    public config1: PaginationInstance = {
          id: 'advanced1',
          itemsPerPage: 10,
          currentPage: 1
    };
    public config2: PaginationInstance = {
          id: 'advanced2',
          itemsPerPage: 10,
          currentPage: 1
    };
    onPageChange(number: number,config:PaginationInstance) {
          config.currentPage = number;
    }
    //end of pagination
    checkComplete():boolean{
        this.appLength=this.newApps.length;
        if(this.appLength==0){
            return true;
        }
        else{
            this.appDetailCompleted=0;
            for (let app of this.newApps) {
                var a = app.BackEndPath;
                var b = app.FrontEndPath;
                if(!(a==null || b==null)){
                    if(a.trim().length>0 && b.trim().length>0)
                    {
                        this.appDetailCompleted += 1;
                    }
                }
            }
            return this.appLength == this.appDetailCompleted;
        }
    }

    getSyncProjects(){
        this.viewLoading();
        this.projectService.getProjects()
            .then(projects=>{
                this.syncApps=projects
                this.viewLoading();
            });
    }

    ngOnInit(){
        this.initAppSync();
    }
    initAppSync(){

        this.removeAppFromTemp(); // 1 and 2
        this.getAppToTemp(); // 3 and 4
        this.getNewAppFromTemp();
        this.getSyncProjects();
    }
    //1
    removeAppFromTemp():void{
        /* this method is to delete temporary data in wdsb.tempProjects */
        this.fnMain.getTempProjects()
        .then(tp=>{
            this.fnMain.deleteProjectsToTempProject(tp);
        });
        // console.log('done-removeAppFromTemp');
    }
    //2
    getAppToTemp():void{
        /* this method is to add all applications found in btss to wdsb.tempProjects */
        this.fnMain.getProjectsFromBTSS()
        .then(tp=>{
            // console.log(tp.length),
            this.fnMain.postProjectsToTempProjects(tp)
        });
        // console.log('done-getAppToTemp');

    }
    //3
    getNewAppFromTemp():void{

        this.viewLoading();
        /*this method is to check if there's a new applications found in btss*/
        this.fnMain.getNewApplications()
            .then(apps =>{
                this.newApps=apps;
                this.checkComplete();

                this.viewLoading();
                // console.log('done-getNewAppFromTemp');
            });
    }
    browseFile():string {
        document.getElementById('pathfinder').click();
        var field:string= (<HTMLInputElement> document.getElementById('pathfinder')).value;
        (<HTMLInputElement> document.getElementById('pathfinder')).value='';
        return (field==null) ? '' : field;
    }

    saveNewApplications(apps:Project[]){
        //this method is to save new applications to wdsb.projects
        this.fnMain.postProjects(apps).then(()=>{
            this.initAppSync();
            alert("New Projects are successfully added");
        });

    }
    updateApplications(apps:Project[]){
        //this method is to save new applications to wdsb.projects
        this.projectService.putProjects(apps).then(()=>{
            this.initAppSync();
            alert("Project details are successfully updated");
        });
    }
}
