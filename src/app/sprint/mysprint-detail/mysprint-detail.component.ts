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
sprint!: Sprint;
sortColumn: string = "story.user";
  sortAsc: boolean = true;
  searchCriteria: string = "";

  constructor(
    private ssvc: SprintService,
    private syssvc: SystemService,
    private stsvc: StoryService
  ) { }
  sortFn(column: string) :void {
    if(column ===this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
  
  ngOnInit(): void {
    let empId: number = +this.syssvc.getLoggedInUser()!.id;

    this.ssvc.getCurrentSprint(empId).subscribe({
      next: (res) => {this.sprint = res;
      console.debug(res);},
      error: (err) => {console.error(err);}
    });
  }

}
