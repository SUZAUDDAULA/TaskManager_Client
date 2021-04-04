import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProject(): Observable<Project[]>{
    return this.httpClient.get<Project[]>('/api/masterData/project', {responseType: 'json'});
  }

  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>('/api/masterData/SaveProject', newProject);
  }
  updateProject(existingProject: Project): Observable<Project>{
    return this.httpClient.put<Project>('/api/masterData/UpdateProject', existingProject);
  }

  deleteProject(projectId: number): Observable<string>{
    return this.httpClient.delete<string>('/api/masterData/DeleteProject/' + projectId);
  }

}
