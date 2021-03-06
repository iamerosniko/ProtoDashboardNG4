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
//services
var btss_wdsb_service_1 = require("../../../services/btss-wdsb.service");
var app_user_service_1 = require("../../../services/app-user.service");
var project_service_1 = require("../../../services/project.service");
var FnApp = (function () {
    function FnApp(btssWdsbService, appuserService, projectService) {
        this.btssWdsbService = btssWdsbService;
        this.appuserService = appuserService;
        this.projectService = projectService;
    }
    /*  Project section */
    /* Get all projects */
    FnApp.prototype.getProjectsWithBTSSAuthentication = function () {
        return this.projectService.getProjects2();
    };
    /*  USER SYNCHRONIZATION section           */
    /*Part 1 delete all users before synchronization*/
    FnApp.prototype.deleteAllUsers = function () {
        this.appuserService.DeleteUser();
    };
    /*Part 2 delete all users before synchronization*/
    //3.getUsers from their database/application retrieves number of users
    FnApp.prototype.getUsersFromApplications = function (projects) {
        return this.btssWdsbService.getUsers(projects);
    };
    return FnApp;
}());
FnApp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [btss_wdsb_service_1.BTSSWDSBService,
        app_user_service_1.AppUserService,
        project_service_1.ProjectService])
], FnApp);
exports.FnApp = FnApp;
