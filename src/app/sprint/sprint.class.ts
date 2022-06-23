import { Product } from "../product/product.class";
import { SprintList } from "../sprintList/sprintList.class";


export class Sprint {
    id:number = 0;
    sprintLength: number = 14;
    maxPoints: number = 112;
    totalPoints: number = 0;
    remainingPoints: number = 112;
    totalTime = 0;
    productId!: number;
    product!: Product;
    sprintLists! : SprintList[];

}