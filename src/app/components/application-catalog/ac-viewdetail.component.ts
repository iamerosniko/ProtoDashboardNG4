import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../entities/favorite';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FnMainApp } from '../maintenance/functions/fn-main-app';
import { AppForClient } from '../../entities/appforclient';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../entities/comment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  moduleId: module.id,
  selector: 'ac-viewdetail',
  templateUrl:`ac-viewdetail.component.html`
})
export class ACDetail implements OnInit {
  selectedID:number=0;
  comments:Comment[]=[];
  app:AppForClient=new AppForClient(0,'',0,'','',0,0,0,false,
    false,'',null,null,null,null,null,null,null,null,null,null,null,
    null,null,null,0,0,null);
  constructor(
    private route: ActivatedRoute,
    private fnMainApp : FnMainApp,
    private router: Router,
    private commentService:CommentService,
    private favService:FavoriteService,
    public sanitizer: DomSanitizer
  ){ }
  ngOnInit(){
    this.getselectedID();
    this.getDetail();
    this.getComments();
  }
  getselectedID(){
    this.route.params.subscribe(params => {
        this.selectedID = params['id'];});
  }
  getDetail(){
    this.fnMainApp.getAppDetail(this.selectedID)
      .then(detail => this.app = detail[0]);
  }
  getStatus(status:boolean):string{
    return status? "Active" : "Inactive";
  }
  isPii(pii:boolean):string{
    return pii? "Yes" : "No";
  }
  run(path:string){
    window.open(path);
  }
  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
    this.favService.postFavorite(fav);
  }
  getComments(){
    this.commentService.getComment(this.selectedID)
      .then(comments=>this.comments=comments);
  }
  getFile():string{
    if(this.app.AppIconPath==null)
      return "images/AppLogo.png";

    return this.app.AppIconPath.length==0 ? "images/AppLogo.png ": this.app.AppIconPath;
  }
}
