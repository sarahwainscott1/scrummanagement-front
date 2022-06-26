import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team/team.class';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products!: Product[];
team!: TeamMember[];
productOwner!: string;
sortColumn: string = "name";
  sortAsc: boolean = true;
  searchCriteria: string = "";

  constructor(
    private psvc: ProductService,
    private tmsvc: TeammemberService
  ) { }
sortFn(column: string) :void {
    if(column ===this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
  ngOnInit(): void {
    this.psvc.list().subscribe({
      next: (res) => {this.products = res;
        console.debug(res);
      },
      error: (err) => {console.error(err);}
    });
  }

}
