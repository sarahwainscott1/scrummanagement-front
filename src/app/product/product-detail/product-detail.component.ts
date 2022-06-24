import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from 'src/app/sprint/sprint.class';
import { SprintService } from 'src/app/sprint/sprint.service';
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
sprint!: Sprint;
  constructor(
    private psvc: ProductService,
    private route: ActivatedRoute,
    private ssvc: StoryService,
    private spsvc: SprintService
  ) { }
  inProgress(sprint: Sprint): void {
    this.spsvc.inProgress(sprint).subscribe({
      next: (res) => {console.debug("Status Updated");
        this.refresh();},
      error: (err) => {console.error(err);}
    });

  }
  concluded(sprint: Sprint): void {
    this.spsvc.concluded(sprint).subscribe({
      next: (res) => {console.debug("Status Updated");
        this.refresh();},
      error: (err) => {console.error(err);}
    });

  }
  cancelled(sprint: Sprint): void {
    this.spsvc.cancelled(sprint).subscribe({
      next: (res) => {console.debug("Status Updated");
        this.refresh();},
      error: (err) => {console.error(err);}
    });

  }
  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.psvc.detail(id).subscribe({
      next: (res) => {this.product = res;
      console.debug(res);},
      error: (err) => {console.error(err);}
    });
  }
  ngOnInit(): void {
    this.refresh();
  
  }

}
