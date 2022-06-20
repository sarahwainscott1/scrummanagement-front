import { Coach } from "../coaching/coach.class";
import { strengthList } from "../strengthlist/strengthlist.class";
import { Strength } from "../strengths/strength.class";

export class TeamMember {
    id: number = 0;
    name: string ="";
    email: string ="";
    password: string ="password";
    role: string ="";
    coach! : Coach[];
    strengthList : strengthList[] = [];
}