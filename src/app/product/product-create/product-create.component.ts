import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product: Product = new Product();
people!: TeamMember[]
  constructor(private psvc: ProductService,
    private router: Router,
    private tmsvc: TeammemberService
    ) { }

  save(): void {
    console.debug(this.product);
    this.psvc.create(this.product).subscribe({
      next: (res) => {this.router.navigateByUrl("/product/list");},
      error: (err) => {console.error(err);}
    });
  }
    
  ngOnInit(): void {
    this.tmsvc.list().subscribe({
      next: (res) => {this.people = res;},
      error: (err) => {console.error(err);}
    });
  }

}
