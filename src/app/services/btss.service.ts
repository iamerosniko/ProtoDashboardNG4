import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
//import { Project } from './project';
import { Tempproject } from '../entities/tempproject';
@Injectable()
export class BtssService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/BTSSProjects';  

    constructor(private http: Http){}

    getProjects(): Promise<Tempproject[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json().data as Tempproject[]) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getProject(id: string): Promise<Tempproject> {
        const url = `${this.apiUrl}/?projectID=${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json().data as Tempproject)  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
                 
    }

    postProject(newProject: Tempproject): Promise<Tempproject> {
        return this.http
            .post(this.apiUrl, JSON.stringify(newProject), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            //.then(res => res.json())  // live
            .catch(this.handleError);
    }

    putProject(project: Tempproject): Promise<Tempproject> {
        const url = `${this.apiUrl}/${project.ProjectID}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }
    
    DeleteProject(projectID: string): Promise<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)  // testing
            //.then(res => res.json())  // live
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
