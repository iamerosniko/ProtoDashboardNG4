import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { UUID } from 'angular2-uuid';
import { Project } from '../entities/project';
@Injectable()
export class TempProjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/TempProjects';  
    private api2Url = 'api/Projects';
    constructor(private http: Http){}

    getProjects(): Promise<Project[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getProject(id: string): Promise<Project> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postProject(newTempProject: Project):void{
         this.http
            .post(this.apiUrl, JSON.stringify(newTempProject), {headers: this.headers})
            .toPromise()
            .then(()=>{console.log(true);})
            .catch(()=>{console.log(newTempProject.ProjectID);});
    }

    postProjects(newTempProjects: Project[]):Promise<string>{
         return this.http
            .post(this.apiUrl, JSON.stringify(newTempProjects), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(()=>{console.log(false);});
    }

    postProjects2(newProjects: Project[]):Promise<any>{
        return this.http
            .post(this.api2Url, JSON.stringify(newProjects), {headers: this.headers})
            .toPromise()
            .then(()=>{console.log(true)})
            .catch(()=>{console.log(false)});
    }

    putProject(project: Project): Promise<Project> {
        const url = `${this.apiUrl}/${project.ProjectID}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }
    
    DeleteProject(id: string): Promise<boolean> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => true)
            .catch(() => false);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
