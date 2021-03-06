import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Comment } from '../../entities/comment';
import { CommentService } from '../../services/comment.service';
import { PaginationInstance } from 'ngx-pagination';
@Component({
  moduleId: module.id,
  selector: 'ac-reviews',
  templateUrl:`ac-reviews.component.html`
})
export class ACReviewsComponent implements OnInit { 
  @Input() appID:number;
  comments:Comment[]=[];
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 3,
      currentPage: 1
  };
  constructor(
    private commentService:CommentService
  ){}
  refreshMe(){
    this.commentService.getComment(this.appID)
      .then(comments=>this.comments=comments);
  }
  ngOnInit(){
    this.refreshMe();
  }
  goToPage(pg:number){
    this.config.currentPage=this.config.currentPage+pg;
  }
  getLastPage():number{
    var lastpage = 1;
    var len = this.comments.length;
    while(len-3>0){
      lastpage+=1;
      len-=3;
    }
    return lastpage;
  }
}
