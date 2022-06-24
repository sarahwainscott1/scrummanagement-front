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

  constructor(
    private psvc: ProductService,
    private tmsvc: TeammemberService
  ) { }

  ngOnInit(): void {
    this.psvc.list().subscribe({
      next: (res) => {this.products = res;
        console.debug(res);
      },
      error: (err) => {console.error(err);}
    });
  }

}
