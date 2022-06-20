import { Team } from "../team/team.class";
import { TeamMember } from "../teammembers/teammember.class";

export class TeamList {
    id: number = 0;
    teamId: number = 0;
    team!: Team;
    teamMemberId: number = 0;
    teamMember!: TeamMember;

}