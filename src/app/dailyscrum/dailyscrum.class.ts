import { DeclarationListEmitMode } from "@angular/compiler";
import { Sprint } from "../sprint/sprint.class";

export class DailyScrum {
    id: number = 0;
    date!: string;
    notes: string = "";
    isHighlighted: boolean = false;
    sprintId: number = 0;
    sprint!: Sprint;
}