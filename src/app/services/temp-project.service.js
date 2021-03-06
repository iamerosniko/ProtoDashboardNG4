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
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var TempProjectService = (function () {
    function TempProjectService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'api/TempProjects';
        this.api2Url = 'api/Projects';
    }
    TempProjectService.prototype.getProjects = function () {
        return this.http
            .get(this.apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TempProjectService.prototype.getProject = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TempProjectService.prototype.postProject = function (newTempProject) {
        this.http
            .post(this.apiUrl, JSON.stringify(newTempProject), { headers: this.headers })
            .toPromise()
            .then(function () { console.log(true); })
            .catch(function () { console.log(newTempProject.ProjectID); });
    };
    TempProjectService.prototype.postProjects = function (newTempProjects) {
        return this.http
            .post(this.apiUrl, JSON.stringify(newTempProjects), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function () { console.log(false); });
    };
    TempProjectService.prototype.postProjects2 = function (newProjects) {
        return this.http
            .post(this.api2Url, JSON.stringify(newProjects), { headers: this.headers })
            .toPromise()
            .then(function () { console.log(true); })
            .catch(function () { console.log(false); });
    };
    TempProjectService.prototype.putProject = function (project) {
        var url = this.apiUrl + "/" + project.ProjectID;
        return this.http
            .put(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function () { return project; })
            .catch(this.handleError);
    };
    TempProjectService.prototype.DeleteProject = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    TempProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TempProjectService;
}());
TempProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TempProjectService);
exports.TempProjectService = TempProjectService;
