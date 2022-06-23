import { Sprint } from "../sprint/sprint.class";
import { Story } from "../story/story.class";

export class SprintList {
    id: number = 0;
    sprintId: number = 0;
    sprint!: Sprint;
    storyId: number = 0;
    story! : Story;
}