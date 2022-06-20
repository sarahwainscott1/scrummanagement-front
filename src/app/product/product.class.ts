import { Sprint } from "../sprint/sprint.class";
import { Story } from "../story/story.class";
import { Team } from "../team/team.class";
import { TeamMember } from "../teammembers/teammember.class";

export class Product {
    id: number = 0;
    name: string = "";
    teamMemberId!: number;
    teamMember!: TeamMember;
    stories!: Story[];
    sprints!: Sprint[];
    teams!: Team[];
}