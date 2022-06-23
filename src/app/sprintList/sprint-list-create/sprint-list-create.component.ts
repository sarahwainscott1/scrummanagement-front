import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Story } from 'src/app/story/story.class';
import { StoryService } from 'src/app/story/story.service';
import { SprintListService } from '../sprint-list.service';
import { SprintList } from '../sprintList.class';

@Component({
  selector: 'app-sprint-list-create',
  templateUrl: './sprint-list-create.component.html',
  styleUrls: ['./sprint-list-create.component.css']
})
export class SprintListCreateComponent implements OnInit {
sprintList: SprintList = new SprintList();
stories!: Story[];
  constructor(
    private splsvc: SprintListService,
    private psvc: ProductService,
    private route: ActivatedRoute,
    private ssvc: StoryService,
    private router: Router
  ) { }
    save(): void {
      this.splsvc.create(this.sprintList).subscribe({
        next: (res) => {console.debug("Story added to sprint");
        this.router.navigateByUrl( `/sprint/detail/${this.sprintList.sprintId}`);},
        error: (err) => {console.error(err);}
      });
    }
  ngOnInit(): void {
    let sId: number = +this.route.snapshot.params["id"];
    this.sprintList.sprintId = sId;
    this.ssvc.getByProduct(this.sprintList.sprint.productId).subscribe({
      next: (res) => {this.stories = res;},
      error: (err) => {console.error(err);}
    });
  }

}
