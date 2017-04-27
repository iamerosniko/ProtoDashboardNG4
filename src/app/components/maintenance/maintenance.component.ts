import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { BU } from '../../entities/bu';
import { Contact } from '../../entities/contact';
//services
import { FnBU } from './functions/fn-bu';
import { FnContact } from './functions/fn-contact';
@Component({
    moduleId: module.id,
    selector: 'maintenance-parent',
    templateUrl: 'maintenance.component.html',
})
export class MaintenanceComponent { 
    constructor(
        public fnBU:FnBU,
        public fnContact:FnContact
    ){ }
    //applications
    //features
    //projects
    //bu
    listBU:BU[]=[];
    selectedBU:BU=new BU(0,'');
    //contacts
    listContact:Contact[]=[];
    selectedContact:Contact=new Contact(0,'','','');
    //main
    showForm:boolean=false;
    formMode:string= 'New';
    
    toFormView(mode:string,form:boolean){
        this.formMode=mode;
        this.showForm=form;
        this.checkForm(mode);
        this.refreshLists();
    }

    private checkForm(mode:string){
        if(mode=='New'){
            //clear all details
            this.selectedBU=new BU(0,'');
            this.selectedContact=new Contact(0,'','','');
        }
    }

    private refreshLists(){
        this.fnBU.getBUs().then(b=>this.listBU=b).catch(()=>{this.listBU=[]});
        this.fnContact.getContacts().then(b=>this.listContact=b).catch(()=>{this.listContact=[]});
    }

    submitBU(){
        this.fnBU.submitBU(this.selectedBU.BUID==0,this.selectedBU)
            .then(()=>{
                this.refreshLists();
                this.toFormView('New',false);
                console.log('success');
            })
            .catch(()=>{
                this.refreshLists();
            });
    }

}
