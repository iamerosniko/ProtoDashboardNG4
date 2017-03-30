import { Injectable } from '@angular/core';
//services
import { TempProjectService } from '../../../services/temp-project.service';
import { BTSSWDSBService } from    '../../../services/btss-wdsb.service';
import { ApplicationService } from '../../../services/application.service';
//entities
import { TempProject } from '../../../entities/tempproject';
import { Application } from '../../../entities/application';
@Injectable()
export class FnMain  { 
    constructor(
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService,
        private applicationService : ApplicationService
    ){ }

    tempProject : TempProject[];
    //1.from wdsb.temprojects
    getTempProjects():TempProject[]{
        var tmpProj:TempProject[];
        this.tempProjectService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }
    //2.delete to tempprojects
    deleteProjectsToTempProject(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.DeleteProject(element.ProjectID);
        });
    }
    //3.from btss.project to wdsb.tempprojects
    getProjectsFromBTSS():TempProject[]{
        var tmpProj:TempProject[];
        this.btssWdsbService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }
    //4.add to wdsb.tempprojects
    postProjectsToTempProjects(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.postProject(element);
        });
    }
    //5.Compare wdsb.tempProjects and wdsb.Application
    //TODO : Create a service that gets a resultset of comparison between
    //       wdsb.tempProjects and wdsb.Application

    //6.add to wdsb.Applications
    postApplications(app:Application[]){
        (app).forEach(element => {
            this.applicationService.postApplication(element);
        });
    }
}
