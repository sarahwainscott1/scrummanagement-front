import { Product } from "../product/product.class";
import { TeamList } from "../teamlist/teamlist.class";
import { TeamMember } from "../teammembers/teammember.class";

export class Team {
    id: number = 0;
    name: string = "";
    teamList!: TeamList[];
    productId: number = 0;
    product!: Product;
}