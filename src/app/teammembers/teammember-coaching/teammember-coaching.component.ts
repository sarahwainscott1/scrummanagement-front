import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoachService } from 'src/app/coaching/coach.service';
import { SystemService } from 'src/app/misc/system.service';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-teammember-coaching',
  templateUrl: './teammember-coaching.component.html',
  styleUrls: ['./teammember-coaching.component.css']
})
export class TeammemberCoachingComponent implements OnInit {
teamMember!: TeamMember;
isSM: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tmsvc: TeammemberService,
    private router: Router,
    private syssvc: SystemService,
    private csvs: CoachService
  ) { }

  remove(id: number): void {
    this.csvs.remove(id).subscribe({
      next: (res) => {console.debug("Coaching deleted");
    this.refresh();},
    error: (err) => {console.error(err);}
    })
  }
refresh(): void {
  if(this.syssvc.getLoggedInUser()?.role === "Scrum Master") {
    this.isSM=true;
  }
  let id = +this.route.snapshot.params["id"];
  this.tmsvc.detail(id).subscribe({
    next: (res) => {console.debug(res);
    this.teamMember = res;},
    error: (err) => {console.error(err);}
  });
}
  ngOnInit(): void {
    this.refresh();
  }

}
