import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Application } from '../entities/application';
import { AppForClient } from '../entities/appforclient';
import { Project } from '../entities/project';
@Injectable()
export class ApplicationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Applications';
    private newAppUrl = 'api/NewApplications';
    constructor(private http: Http){}

    getNewApplications():Promise<Project[]>{
        return this.http
                .get(this.newAppUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getApplications(): Promise<Application[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getApplication(id: number): Promise<Application> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    //client interface
    //get all app
    getAllAppClient(appName:string): Promise<AppForClient[]> {
        const url = `${this.apiUrl}/GetWDSB_ApplicationsClient/?appName=%`+appName;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }
    
    getFavAppClient(appName:string): Promise<AppForClient[]> {
        const url = `${this.apiUrl}/GetWDSB_FavApp/?appName=%`+appName;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getAvailAppClient(appName:string): Promise<AppForClient[]> {
        const url = `${this.apiUrl}/GetWDSB_AvailApp/?appName=%`+appName;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }
    
    getAppDetail(id:number): Promise<AppForClient> {
        const url = `${this.apiUrl}/GetWDSB_AppDetail/?appID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    postApplication(newApp: Application): Promise<Application> {
        return this.http
            .post(this.apiUrl, JSON.stringify(newApp), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    putApplication(application: Application): Promise<Application> {
        const url = `${this.apiUrl}/${application.AppID}`;
        return this.http
            .put(url, JSON.stringify(application), {headers: this.headers})
            .toPromise()
            .then(() => application)
            .catch(this.handleError);
    }
    
    DeleteApplication(id: string): Promise<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
