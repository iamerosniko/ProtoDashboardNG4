import { Injectable } from '@angular/core';
//services
import { TempProjectService } from '../../../services/temp-project.service';
import { BTSSWDSBService } from '../../../services/btss-wdsb.service';
//entities
import { TempProject } from '../../../entities/tempproject';

@Injectable()
export class FnMain  { 
    constructor(
        
        private tempProjectService: TempProjectService,
        private btssWdsbService : BTSSWDSBService
    ){ }

    tempProject : TempProject[];

    getProjectsFromBTSS():TempProject[]{
        var tmpProj:TempProject[];
        this.btssWdsbService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }

    getTempProjects():TempProject[]{
        var tmpProj:TempProject[];
        this.tempProjectService.getProjects()
            .then(tp => tmpProj = tp);
        return tmpProj;
    }

    postProjectsToTempProject(tp:TempProject[]){
        (tp).forEach(element => {
            this.tempProjectService.postProject(element);
        });
    }
}
