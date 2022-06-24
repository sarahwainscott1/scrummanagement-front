import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { Story } from 'src/app/story/story.class';
import { StoryService } from 'src/app/story/story.service';
import { Sprint } from '../sprint.class';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-mysprint-detail',
  templateUrl: './mysprint-detail.component.html',
  styleUrls: ['./mysprint-detail.component.css']
})
export class MysprintDetailComponent implements OnInit {
sprints!: Sprint[];

  constructor(
    private ssvc: SprintService,
    private syssvc: SystemService,
    private stsvc: StoryService
  ) { }

  
  ngOnInit(): void {
    let empId: number = +this.syssvc.getLoggedInUser()!.id;

    this.ssvc.getCurrentSprint(empId).subscribe({
      next: (res) => {this.sprints = res;
      console.debug(res);},
      error: (err) => {console.error(err);}
    });
  }

}
