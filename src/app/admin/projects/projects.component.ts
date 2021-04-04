import { ProjectsService } from './../../projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick(): void{
    this.projectService.insertProject(this.newProject).subscribe((response) => {
      const p: Project = new Project();
      p.Id = response.Id;
      p.projectCode = response.projectCode;
      p.projectName = response.projectName;
      p.startDate = response.startDate;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      this.newProject.Id = null;
      this.newProject.projectCode = null;
      this.newProject.projectName = null;
      this.newProject.startDate = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

  onEditClick(event, index: number): void{
    this.editProject.Id = this.projects[index].Id;
    this.editProject.projectCode = this.projects[index].projectCode;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.startDate = this.projects[index].startDate;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(): void{
    this.projectService.updateProject(this.editProject).subscribe((response: Project) => {
      const p: Project = new Project();
      p.Id = response.Id;
      p.projectCode = response.projectCode;
      p.projectName = response.projectName;
      p.startDate = response.startDate;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;

      this.newProject.Id = null;
      this.newProject.projectCode = null;
      this.newProject.projectName = null;
      this.newProject.startDate = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteClick(event, index: number): void{
    this.deleteProject.Id = this.projects[index].Id;
    this.deleteProject.projectCode = this.projects[index].projectCode;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.startDate = this.projects[index].startDate;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteIndex = index;
  }

  onDeleteConfirmClick(): void{
    this.projectService.deleteProject(this.deleteProject.Id).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.Id = null;
        this.deleteProject.projectCode = null;
        this.deleteProject.projectName = null;
        this.deleteProject.startDate = null;
        this.deleteProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

}
