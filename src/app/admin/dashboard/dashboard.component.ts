import { DashboardService } from './../../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  UserName: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMemberSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void{
    this.Designation = 'Team Leader';
    this.UserName = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients = ['ABC Infotech Ltd.', 'DEF Software Solution', 'GHI Industries Ltd.'];
    this.Projects = [
      'Project A', 'Project B', 'Project C', 'Project D'
    ];

    for (let i = 2021; i > 2009; i--) {
       this.Years.push(i);
    }
    this.TeamMemberSummary = this.dashboardService.getTeamMemberSummery();

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];

  }

  onProjectChange($event): void{
    if ($event.target.innerHTML === 'Project A'){
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    }
    else if ($event.target.innerHTML === 'Project B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 56433;
      this.AvailableFunds = 65997;
    }
    else if ($event.target.innerHTML === 'Project C') {
      this.ProjectCost = 45335;
      this.CurrentExpenditure = 658854;
      this.AvailableFunds = 4566;
    }
    else if ($event.target.innerHTML === 'Project D') {
      this.ProjectCost = 89654;
      this.CurrentExpenditure = 22233;
      this.AvailableFunds = 2322;
    }
  }

}
