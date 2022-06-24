import { Product } from "../product/product.class";
import { SprintList } from "../sprintList/sprintList.class";
import { Team } from "../team/team.class";


export class Sprint {
    id:number = 0;
    sprintLength: number = 14;
    maxPoints: number = 112;
    totalPoints: number = 0;
    remainingPoints: number = 112;
    totalTime:number = 0;
    status: string = "NEW";
    productId!: number;
    product!: Product;
    sprintLists! : SprintList[];
    teamId: number = 0;
    team!: Team;

}