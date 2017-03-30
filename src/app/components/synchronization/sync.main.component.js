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
var core_1 = require("@angular/core");
var fn_main_1 = require("./functions/fn-main");
var SyncMainComponent = (function () {
    function SyncMainComponent(fnMain) {
        this.fnMain = fnMain;
        this.name = 'Sync page';
    }
    SyncMainComponent.prototype.getSample = function () {
        this.name = this.fnMain.changeStringSmple();
    };
    return SyncMainComponent;
}());
SyncMainComponent = __decorate([
    core_1.Component({
        selector: 'sync-comp',
        template: "<h1>Hello {{name}}</h1>\n    <a (click)=\"getSample()\" role=\"button\" tooltip=\"Refresh\" class=\"btn btn-default btn-sm\">\n      <i class=\"glyphicon glyphicon-refresh\"></i>  Refresh\n    </a>",
    }),
    __metadata("design:paramtypes", [fn_main_1.FnMain])
], SyncMainComponent);
exports.SyncMainComponent = SyncMainComponent;
