import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Team } from '../team.class';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-myteam-detail',
  templateUrl: './myteam-detail.component.html',
  styleUrls: ['./myteam-detail.component.css']
})
export class MyteamDetailComponent implements OnInit {
  team!: Team;
  isSM: boolean = false;
    userid!: number
  constructor(private tsvc: TeamService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService) { }

  ngOnInit(): void {
    let userid: number = +this.syssvc.getLoggedInUser()!.id;
    if(this.syssvc.getLoggedInUser()!.role == "Scrum Master") {
      this.isSM = true;
    }
    this.tsvc.getmyteam(userid).subscribe({
      next: (res) => {this.team = res;},
      error: (err) => {console.error(err);}
    });
  }

}
