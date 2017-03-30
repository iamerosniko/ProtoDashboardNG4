import { Component } from '@angular/core';
import { FnMain } from './functions/fn-main';
@Component({
  selector: 'sync-comp',
  template: `<h1>Hello {{name}}</h1>
    <a (click)="getSample()" role="button" tooltip="Refresh" class="btn btn-default btn-sm">
      <i class="glyphicon glyphicon-refresh"></i>  Refresh
    </a>`,
})
export class SyncMainComponent  { 
    name = 'Sync page';
    constructor(
        private fnMain : FnMain
    ){ }

    getSample():void{
        this.name=this.fnMain.changeStringSmple();
    }
}
