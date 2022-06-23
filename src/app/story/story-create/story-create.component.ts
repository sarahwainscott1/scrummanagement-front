import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Story } from '../story.class';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-create',
  templateUrl: './story-create.component.html',
  styleUrls: ['./story-create.component.css']
})
export class StoryCreateComponent implements OnInit {
story : Story = new Story();
product!: Product;

  constructor(
    private ssvc: StoryService,
    private route: ActivatedRoute,
    private psvc: ProductService,
    private router: Router
  ) { }

  save() : void {
    console.debug(this.story);
    this.ssvc.create(this.story).subscribe({
      next: (res) => {console.debug("Story Created");
      this.router.navigateByUrl(`/product/detail/${this.product.id}`)},
      error: (err) => {console.error(err);}
    });
    }
  ngOnInit(): void {
    let pId: number = +this.route.snapshot.params["id"];
    this.story.productId = pId;
    this.psvc.detail(pId).subscribe({
      next: (res) => {this.product = res;},
      error: (err) => {console.error(err);}
    })

  }

}
