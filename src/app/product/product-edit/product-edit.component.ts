import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product! : Product;
  people!: TeamMember[];

  constructor(
    private tmsvc: TeammemberService,
    private route: ActivatedRoute,
    private router: Router,
    private psvc: ProductService
  ) { }
    save(): void {
      this.psvc.change(this.product).subscribe({
        next: (res) => {console.debug("Product changed");
      this.router.navigateByUrl("/product/list");},
      error: (err) => {console.error(err);}
      });
    }
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.psvc.detail(id).subscribe({
      next: (res) => {this.product = res;},
      error: (err) => {console.error(err);}
    });
    this.tmsvc.list().subscribe({
      next: (res) => {this.people = res;},
      error: (err) => {console.error(err);}
    });
  }

}
