import { Product } from "../product/product.class";
import { Story } from "../story/story.class";

export class Sprint {
    id:number = 0;
    springLength: number = 14;
    maxPoints: number = 112;
    totalPoints: number = 0;
    remainingPoints: number = 112;
    totalTime = 0;
    productId!: number;
    product!: Product;
    story! : Story[];

}