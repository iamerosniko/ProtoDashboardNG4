import { Injectable } from '@angular/core';
//services
import { TempProjectService } from '../../../services/temp-project.service';
import { BTSSWDSBService } from '../../../services/btss-wdsb.service';
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
    //from wdsb.temprojects
    getTempProjects():TempProject[]{
        var tmpProj:TempProject[];
        this.tempProjectService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }
    //delete to tempprojects
    deleteProjectsToTempProject(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.DeleteProject(element.ProjectID);
        });
    }
    //from btss.project to wdsb.tempprojects
    getProjectsFromBTSS():TempProject[]{
        var tmpProj:TempProject[];
        this.btssWdsbService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }
    //add to wdsb.tempprojects
    postProjectsToTempProjects(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.postProject(element);
        });
    }
    //add to wdsb.Applications
    postApplications(app:Application[]){
        (app).forEach(element => {
            this.applicationService.postApplication(element);
        });
    }
}
