import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AppForClient } from '../../../entities/appforclient';
import { Favorite } from '../../../entities/favorite';
import { FavoriteService } from '../../../services/favorite.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'ac-thumbnail',
  templateUrl:`ac-thumbnail.component.html`
})
export class ACThumbnailComponent  { 
  @Input() app: AppForClient;
  @Output() refreshFav = new EventEmitter();
  constructor(
    private router: Router,
    private favService:FavoriteService
  ){}
  
  run(){
    //window.open(this.app.OpsFront,'_blank');
    //window.location.replace();
    window.location.href =this.app.OpsFront;
  }

  myFav(app:AppForClient){
    var fav:Favorite = new Favorite(0,app.AppID,'',app.myFav);
    this.favService.postFavorite(fav).then(()=>{this.refreshFav.emit();});
  }

  gotoDetail(app:AppForClient){
      this.router.navigate(['/Applications', app.AppID]);
  }
}
