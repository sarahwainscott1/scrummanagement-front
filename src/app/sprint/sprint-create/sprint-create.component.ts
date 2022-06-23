import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Story } from 'src/app/story/story.class';
import { StoryService } from 'src/app/story/story.service';
import { Sprint } from '../sprint.class';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-create',
  templateUrl: './sprint-create.component.html',
  styleUrls: ['./sprint-create.component.css']
})
export class SprintCreateComponent implements OnInit {
sprint: Sprint = new Sprint();
story!: Story;
product!: Product;
showStories: boolean = false;
stories!: Story[];

  constructor(
    private spsvc: SprintService,
    private route: ActivatedRoute,
    private router: Router,
    private psvc: ProductService,
    private stsvc: StoryService
  ) { }

  addStory(): void {
    this.showStories = !this.showStories;
  }
  save(): void {
    this.spsvc.create(this.sprint).subscribe({
      next: (res) => {console.debug("Sprint Created");
    this.router.navigateByUrl(`/product/detail/${this.sprint.productId}`)},
      error: (err) => {console.error(err);}
    })
  }
  ngOnInit(): void {
    let pId: number = +this.route.snapshot.params["id"];
    this.sprint.productId = pId;
    this.psvc.detail(pId).subscribe({
      next: (res) => {this.product = res;},
      error: (err) => {console.error(err);}
    });
    this.stsvc.getByProduct(pId).subscribe({
      next: (res) => {this.stories = res},
      error: (err) => {console.error(err);}
    });
  }

}
