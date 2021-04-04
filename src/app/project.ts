export class Project {
    Id: number;
    projectName: string;
    projectCode: string;
    startDate: string;
    teamSize: number;

    constructor() {
        this.Id = 0;
        this.projectName = null;
        this.projectCode = null;
        this.startDate = null;
        this.teamSize = 0;
    }
}
