import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { BTSSWDSBService } from    '../../../services/btss-wdsb.service';
import { AppUserService } from '../../../services/app-user.service';
//entities
import { TempProject } from '../../../entities/tempproject';
import { Application } from '../../../entities/application';
import { AppUsers } from '../../../entities/appusers';
@Injectable()
export class FnUser  { 
    constructor(
        private btssWdsbService : BTSSWDSBService,
        private appuserService : AppUserService
    ){ }

/*Part 1 delete all users before synchronization*/
    deleteAllUsers():void{
        this.appuserService.DeleteUser();
    }
/*Part 2 delete all users before synchronization*/
    //3.getUsers from their database/application retrieves number of users
    getUsersFromApplications(app:Application) : number{
        var result : number;
        this.btssWdsbService.getUsers(app).then(user => result = user);
        return result;
    }
}