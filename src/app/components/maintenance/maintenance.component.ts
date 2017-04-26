import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities

@Component({
    moduleId: module.id,
    selector: 'maintenance-parent',
    templateUrl: 'maintenance.component.html',
})
export class MaintenanceComponent { 
    constructor(
    ){ }
    
    showForm:boolean=false;
    formMode:string= 'New';
    
    changeView(mode:string){
        this.formMode=mode;
        this.showForm=!this.showForm;
    }
}
