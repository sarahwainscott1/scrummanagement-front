import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SprintListService } from 'src/app/sprintList/sprint-list.service';
import { SprintList } from 'src/app/sprintList/sprintList.class';
import { Story } from 'src/app/story/story.class';
import { StoryService } from 'src/app/story/story.service';
import { Sprint } from '../sprint.class';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-detail',
  templateUrl: './sprint-detail.component.html',
  styleUrls: ['./sprint-detail.component.css']
})
export class SprintDetailComponent implements OnInit {
sprint!: Sprint;
product!: Product;
stories!: Story[];
showList: boolean = false;
story!: Story;
sprintList: SprintList = new SprintList();


  constructor(
    private spsvc: SprintService,
    private route: ActivatedRoute,
    private prsvc: ProductService,
    private stsvc: StoryService,
    private slsvc: SprintListService
  ) { }

  showAdd(): void {
    this.showList = !this.showList;
    
  }
  removeFromSprint(id: number) :void {
    this.stsvc.detail(id).subscribe({
        next: (res) => {this.story = res;
        console.debug(res);},
        error: (err) => {console.error(err);}
      });
    this.story.sprintId = 0; 
    this.stsvc.change(this.story).subscribe({
      next: (res) => {console.debug("Story removed from Sprint");},
      error: (err) => {console.error(err);}
    });
  }

  save(): void {}

  saveToSprint(id: number): void {
    this.sprintList.sprintId = this.sprint.id;
    this.slsvc.create(this.sprintList).subscribe({
      next: (res) => {console.debug("Added to sprint");
        this.refresh();},
      error: (err) => {console.error(err);}
    });
    
  }
  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.spsvc.detail(id).subscribe({
      next: (res) => {this.sprint = res;
        console.debug(res);
        this.prsvc.detail(this.sprint.productId).subscribe({
          next: (resP) => {this.product = resP;
            this.stsvc.getUnassigned(this.product.id,this.sprint.id).subscribe({
              next: (res) => {this.stories = res;},
              error: (err) => {console.error(err);}
            });
          },
          error: (err) => {console.error(err);}
        });},
      error: (err) => {console.error(err);}
    });
  }
  ngOnInit(): void {
   this.refresh();
    
    
  }

}
