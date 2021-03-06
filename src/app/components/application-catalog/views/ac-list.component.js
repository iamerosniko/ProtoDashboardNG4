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
var favorite_1 = require("../../../entities/favorite");
var favorite_service_1 = require("../../../services/favorite.service");
var router_1 = require("@angular/router");
var ac_parent_component_1 = require("../ac-parent.component");
var getauth_1 = require("../../../entities/getauth");
var ACListComponent = (function () {
    function ACListComponent(router, favService) {
        this.router = router;
        this.favService = favService;
        this.apps = [];
        this.config = {
            id: 'advanced',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.filter = '';
    }
    //pagination
    ACListComponent.prototype.onPageChange = function (number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    };
    ACListComponent.prototype.run = function (app) {
        window.open(app.OpsFront);
    };
    ACListComponent.prototype.myFav = function (app) {
        var _this = this;
        var fav = new favorite_1.Favorite(0, app.AppID, '', app.myFav);
        this.favService.postFavorite(fav).then(function () { _this.thisParent.refresh; });
    };
    ACListComponent.prototype.gotoDetail = function (app) {
        this.router.navigate(['/Applications', app.AppID]);
    };
    return ACListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ACListComponent.prototype, "apps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", ac_parent_component_1.ACComponent)
], ACListComponent.prototype, "thisParent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", getauth_1.GetAuth)
], ACListComponent.prototype, "auth", void 0);
ACListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-list',
        templateUrl: "ac-list.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        favorite_service_1.FavoriteService])
], ACListComponent);
exports.ACListComponent = ACListComponent;
