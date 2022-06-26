import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product/product.class';

@Pipe({
  name: 'productlistSearch'
})
export class ProductlistSearchPipe implements PipeTransform {

  transform(products: Product[],search: string = ""): Product[] {
    if(search.length == 0) {return products}
    search = search.toLowerCase();
    let selected: Product[] = [];

    for(let p of products) {
      if(p.teams.length > 0) {
        for(let t of p.teams) {
          if( 
            p.name.toLowerCase().includes(search) ||
            p.id.toString().includes(search) ||
            p.teamMember.name.toLowerCase().includes(search) ||
            t.name.toLowerCase().includes(search))
            { if (!selected.includes(p)) {selected.push(p)}}
        }
      }
      else if (
        p.name.toLowerCase().includes(search) ||
            p.id.toString().includes(search) ||
            p.teamMember.name.toLowerCase().includes(search)
      ) {if (!selected.includes(p) ){selected.push(p)}

      }
    } return selected;
  }

}
