import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Comment } from '../../entities/comment';
@Component({
  moduleId: module.id,
  selector: 'ac-reviews',
  templateUrl:`ac-reviews.component.html`
})
export class ACReviewsComponent  { 
  @Input() appID:number;
  @Input() comments:Comment[]=[];
  @Output() refreshComment = new EventEmitter();

  refresh(){
    this.refreshComment.emit();
  }
}
