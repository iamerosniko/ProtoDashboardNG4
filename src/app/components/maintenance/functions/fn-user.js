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
//services
var btss_wdsb_service_1 = require("../../../services/btss-wdsb.service");
var app_user_service_1 = require("../../../services/app-user.service");
var FnUser = (function () {
    function FnUser(btssWdsbService, appuserService) {
        this.btssWdsbService = btssWdsbService;
        this.appuserService = appuserService;
    }
    /*Part 1 delete all users before synchronization*/
    FnUser.prototype.deleteAllUsers = function () {
        this.appuserService.DeleteUser();
    };
    /*Part 2 delete all users before synchronization*/
    //3.getUsers from their database/application retrieves number of users
    FnUser.prototype.getUsersFromApplications = function (app) {
        var result;
        this.btssWdsbService.getUsers(app).then(function (user) { return result = user; });
        return result;
    };
    return FnUser;
}());
FnUser = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [btss_wdsb_service_1.BTSSWDSBService,
        app_user_service_1.AppUserService])
], FnUser);
exports.FnUser = FnUser;
