import { Product } from "../product/product.class";
import { Sprint } from "../sprint/sprint.class";

export class Story {
    id: number = 0;
    user: string = "";
    feature: string = "";
    value: string = "";
    importance: string = "";
    estimatedPoints: number = 0;
    actualTime: number = 0;
    sprintId!: number
    sprint!: Sprint
    productId!: number;
    product! : Product;
}