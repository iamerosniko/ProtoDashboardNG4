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
/*Part 1 getting users from specific database app
 */
    //1.getUsers from WDSB
    getUsersFromWDSB(appID : number):Promise<AppUsers[]>{
        return this.appuserService.getUser(appID);
    }

    //2.deleteUsers where app
    deleteUsers(appUsers:AppUsers[]): void{
        // for (let entry of appUsers) {
        //     this.appuserService.DeleteUser(entry.AppUserID); 
        // }
        this.appuserService.DeleteUsers(appUsers);
    }

    //3.getUsers from their database/application
    getUsersFromApplications(app:Application) : AppUsers[]{
        var appUsers : AppUsers[];
        this.btssWdsbService.getUsers(app).then(user => appUsers = user);
        return appUsers;
    }

    //4.postUsers
    postUsers(appUsers:AppUsers[]): boolean{
        var isOk:boolean;
        for (let entry of appUsers) {
            this.appuserService.postUser(entry).then(()=>{isOk=true}); 
        }
        return isOk;
    }
}