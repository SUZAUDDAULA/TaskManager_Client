import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummery(): any[]
  {
    const TeamMemberSummary = [
      {Region: 'East', TeamMembersCount: 20, TemporarlyUnavailableMembers: 4},
      {Region: 'West', TeamMembersCount: 15, TemporarlyUnavailableMembers: 8},
      {Region: 'South', TeamMembersCount: 17, TemporarlyUnavailableMembers: 1},
      {Region: 'North', TeamMembersCount: 15, TemporarlyUnavailableMembers: 6}
    ];
    return TeamMemberSummary;
  }
}
