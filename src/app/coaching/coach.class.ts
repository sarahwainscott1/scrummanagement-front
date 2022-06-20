import { TeamMember } from "../teammembers/teammember.class";

export class Coach {
    id: number = 0;
    teamMemberId: number = 0;
    reason: string = "";
    outcome: string = "";
    teamMember!: TeamMember;
}