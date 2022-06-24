import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from '../story.class';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent implements OnInit {
story!: Story;

  constructor(
    private stsvc: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    save(): void {
      this.stsvc.change(this.story).subscribe({
        next: (res) => {console.debug("Story changed");
          this.router.navigateByUrl(`/product/detail/${this.story.productId}`)},
        error: (err) => {console.error(err);}
      });
    }
  ngOnInit(): void {
    let stId: number = +this.route.snapshot.params["id"];
    this.stsvc.detail(stId).subscribe({
      next: (res) => {this.story = res},
      error: (err) => {console.error(err);}
    })
  }

}
