import { Injectable } from '@angular/core';//services
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

    changeStringSmple():string {
        return "eros";
    }
}
