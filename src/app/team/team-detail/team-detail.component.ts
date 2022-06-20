import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Team } from '../team.class';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
team!: Team;
isSM: boolean = false;
  user!: number
  constructor(
    private tsvc: TeamService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.tsvc.detail(id).subscribe({
      next: (res) => {this.team = res;},
      error: (err) => {console.error(err);}
    });
    if(this.syssvc.getLoggedInUser()?.role === "Scrum Master") {
      this.isSM=true;
    }
    this.user = +this.syssvc.getLoggedInUser()!.id; 
  }

}
