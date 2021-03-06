"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appforclient_1 = require("../../../entities/appforclient");
var favorite_1 = require("../../../entities/favorite");
var favorite_service_1 = require("../../../services/favorite.service");
var router_1 = require("@angular/router");
var ACThumbnailComponent = (function () {
    function ACThumbnailComponent(router, favService) {
        this.router = router;
        this.favService = favService;
        this.refreshFav = new core_1.EventEmitter();
    }
    ACThumbnailComponent.prototype.run = function () {
        //window.open(this.app.OpsFront,'_blank');
        //window.location.replace();
        window.location.href = this.app.OpsFront;
    };
    ACThumbnailComponent.prototype.myFav = function (app) {
        var _this = this;
        var fav = new favorite_1.Favorite(0, app.AppID, '', app.myFav);
        this.favService.postFavorite(fav).then(function () { _this.refreshFav.emit(); });
    };
    ACThumbnailComponent.prototype.gotoDetail = function (app) {
        this.router.navigate(['/Applications', app.AppID]);
    };
    return ACThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appforclient_1.AppForClient)
], ACThumbnailComponent.prototype, "app", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ACThumbnailComponent.prototype, "refreshFav", void 0);
ACThumbnailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-thumbnail',
        templateUrl: "ac-thumbnail.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        favorite_service_1.FavoriteService])
], ACThumbnailComponent);
exports.ACThumbnailComponent = ACThumbnailComponent;
