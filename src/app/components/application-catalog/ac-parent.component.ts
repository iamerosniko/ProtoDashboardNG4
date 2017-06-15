import { Component,OnInit } from '@angular/core';
import { AppForClient } from '../../entities/appforclient';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
import { PaginationInstance } from 'ngx-pagination';
import { GetAuthService } from '../../services/getauth.service';
import { GetAuth } from '../../entities/getauth';
import {Observable} from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:`ac-parent.component.html`
})
export class ACComponent implements OnInit {
  public searchApp='';
  viewtype:number=0;
  tabselected:number=0;
  apps:AppForClient[]=[];
  listApps:AppForClient[][]=[];
  myAuth:GetAuth=new GetAuth('','',false,false,false,false,'');
  private data: Observable<Array<number>>;
  constructor(
      private fn: FnMainApp,
      private getAuthService:GetAuthService
  ){
  }

  ngOnInit(){
    this.data = new Observable(() => {
      this.getMyAvailApps(this.searchApp);
      setTimeout(() => {
        if(this.apps.length==0){
          this.getAllApps(this.searchApp);
        }
      }, 500);

    });
    this.data.subscribe();
    this.getAuthService.getAuth().then(auth => this.myAuth=auth);
  }
  //all biztech apps
  getAllApps(appName:string){
    this.tabselected=0;
    this.apps=[];
    this.fn.getAppsClient(appName)
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
  }
  //my available app
  getMyAvailApps(appName:string){

    this.tabselected=1;
    this.apps=[];
    this.fn.getAvailAppsClient(appName)
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });

  }
  //favorites
  getMyFavApps(appName:string){
    this.tabselected=2;
    this.apps=[];
    this.fn.getFavAppsClient(appName)
      .then(apps=>{
          this.apps=apps;
          this.sliceToFour();
      });
  }

  refresh(selection:number){
    this.tabselected=selection;
    if(this.tabselected==0)
      this.getAllApps(this.searchApp);
    else if(this.tabselected==1)
      this.getMyAvailApps(this.searchApp);
    else
      this.getMyFavApps(this.searchApp);
  }

  sliceToFour(){
    this.listApps=[];
    var ctr=0,listCtr=0;
    var tempList:AppForClient[]=[];
    for (let app of this.apps) {
      tempList.push(app);
      ctr+=1;
      listCtr+=1;
      if(ctr==4 || listCtr==this.apps.length){
        this.listApps.push(tempList);
        ctr=0;
        tempList=[];
      }
    }
  }
}
