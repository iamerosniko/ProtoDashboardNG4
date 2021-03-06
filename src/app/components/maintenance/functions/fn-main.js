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
var temp_project_service_1 = require("../../../services/temp-project.service");
var btss_wdsb_service_1 = require("../../../services/btss-wdsb.service");
var application_service_1 = require("../../../services/application.service");
var app_user_service_1 = require("../../../services/app-user.service");
var FnMain = (function () {
    function FnMain(tempProjectService, btssWdsbService, applicationService, appuserService) {
        this.tempProjectService = tempProjectService;
        this.btssWdsbService = btssWdsbService;
        this.applicationService = applicationService;
        this.appuserService = appuserService;
    }
    //Part 1 : Clear Temporary Table  > wdsb.tempProjects
    //1.from wdsb.temprojects 
    FnMain.prototype.getTempProjects = function () {
        return this.tempProjectService.getProjects();
        //return tmpProj;
    };
    //2.delete to tempprojects
    FnMain.prototype.deleteProjectsToTempProject = function (tp) {
        // (tp).forEach(element => {
        //     this.tempProjectService.DeleteProject(element.ProjectID);
        // });
        for (var _i = 0, tp_1 = tp; _i < tp_1.length; _i++) {
            var entry = tp_1[_i];
            this.tempProjectService.DeleteProject(entry.ProjectID);
        }
    };
    //Part 2 : Insert list of applications from btss
    //3.from btss.project to wdsb.tempprojects
    FnMain.prototype.getProjectsFromBTSS = function () {
        var tmpProj;
        return this.btssWdsbService.getProjects();
    };
    //4.add to wdsb.tempprojects
    FnMain.prototype.postProjectsToTempProjects = function (tp) {
        // (tp).forEach(element => {
        //     this.tempProjectService.postProject(element);
        // });
        // for (let entry of tp) {
        //     this.tempProjectService.postProject(entry)
        // }
        this.tempProjectService.postProjects(tp);
    };
    /*Part 3 : Compare if already exists to wdsb.Applcation
     * if not exists > ADD
     * (use VIEW in MSSQL right outer join + null)
    */
    //5.Compare wdsb.tempProjects and wdsb.Application
    FnMain.prototype.getNewApplications = function () {
        return this.applicationService.getNewApplications();
    };
    //6.add to wdsb.Projects
    FnMain.prototype.postProjects = function (app) {
        // (app).forEach(element => {
        //     this.applicationService.postApplication(element);
        // });
        return this.tempProjectService.postProjects2(app);
    };
    return FnMain;
}());
FnMain = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [temp_project_service_1.TempProjectService,
        btss_wdsb_service_1.BTSSWDSBService,
        application_service_1.ApplicationService,
        app_user_service_1.AppUserService])
], FnMain);
exports.FnMain = FnMain;
