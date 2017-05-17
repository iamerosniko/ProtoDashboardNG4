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
var BTSSWDSBService = (function () {
    function BTSSWDSBService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.BTSSUrl = 'api/BTSSProjects';
        this.userURL = 'api/GetUsers';
    }
    BTSSWDSBService.prototype.getProjects = function () {
        return this.http
            .get(this.BTSSUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    BTSSWDSBService.prototype.getProject = function (id) {
        var url = this.BTSSUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); }) // testing
            .catch(this.handleError);
    };
    BTSSWDSBService.prototype.getUsers = function (myproject) {
        var url = this.userURL + "/Getset_User/?ds=" + myproject.ProjectDatasource + "&dbase=" + myproject.ProjectDb + "&projectID=" + myproject.ProjectID;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); }) //testing
            .catch(this.handleError);
    };
    BTSSWDSBService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BTSSWDSBService;
}());
BTSSWDSBService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BTSSWDSBService);
exports.BTSSWDSBService = BTSSWDSBService;
