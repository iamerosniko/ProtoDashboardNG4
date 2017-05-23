import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { GetAuth } from '../../../entities/getauth';
import { Comment } from '../../../entities/comment';
import { GetAuthService } from '../../../services/getauth.service';
@Component({
  moduleId: module.id,
  selector: 'ac-comments',
  templateUrl:`ac-comments.component.html`
})
export class ACCommentsComponent  { 
   @Input() thiscomment:Comment;
   @Input() thisIndex:number;
   fullname:string='';
   constructor(private ga:GetAuthService){
      this.getFullName(this.thiscomment.UserName)
   }

   getFullName(username:string){
      this.ga.getFullName(username)
      .then(t=>this.fullname=t.FullName);
   }
}
