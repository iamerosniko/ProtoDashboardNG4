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
var ApplicationService = (function () {
    function ApplicationService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'api/Applications';
        this.newAppUrl = 'api/NewApplications';
    }
    ApplicationService.prototype.getNewApplications = function () {
        return this.http
            .get(this.newAppUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.getApplications = function () {
        return this.http
            .get(this.apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.getApplication = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //client interface
    //get all app
    ApplicationService.prototype.getAllAppClient = function (appName) {
        var url = this.apiUrl + "/GetWDSB_ApplicationsClient/?appName=%" + appName;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.getFavAppClient = function (appName) {
        var url = this.apiUrl + "/GetWDSB_FavApp/?appName=%" + appName;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.getAvailAppClient = function (appName) {
        var url = this.apiUrl + "/GetWDSB_AvailApp/?appName=%" + appName;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.getAppDetail = function (id) {
        var url = this.apiUrl + "/GetWDSB_AppDetail/?appID=" + id;
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.postApplication = function (newApp) {
        return this.http
            .post(this.apiUrl, JSON.stringify(newApp), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationService.prototype.putApplication = function (application) {
        var url = this.apiUrl + "/" + application.AppID;
        return this.http
            .put(url, JSON.stringify(application), { headers: this.headers })
            .toPromise()
            .then(function () { return application; })
            .catch(this.handleError);
    };
    ApplicationService.prototype.DeleteApplication = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ApplicationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ApplicationService;
}());
ApplicationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApplicationService);
exports.ApplicationService = ApplicationService;
