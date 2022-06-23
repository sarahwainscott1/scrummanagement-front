import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from 'src/app/story/story.class';
import { StoryService } from 'src/app/story/story.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product!: Product;

  constructor(
    private psvc: ProductService,
    private route: ActivatedRoute,
    private ssvc: StoryService
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.psvc.detail(id).subscribe({
      next: (res) => {this.product = res;
      console.debug(res);},
      error: (err) => {console.error(err);}
    });
  
  }

}
