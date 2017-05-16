import { Component,OnInit,Input } from '@angular/core';
import { Comment } from '../../../entities/comment';
@Component({
  moduleId: module.id,
  selector: 'ac-createcomment',
  templateUrl:`ac-createcomment.component.html`
})
export class ACCreateCommentComponent  { 
  @Input() appid:number;
  comment=new Comment(0,this.appid,'','',null,'');
}
