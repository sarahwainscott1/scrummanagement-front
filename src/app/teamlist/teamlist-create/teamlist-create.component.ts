import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Team } from 'src/app/team/team.class';
import { TeamService } from 'src/app/team/team.service';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { TeamList } from '../teamlist.class';
import { TeamlistService } from '../teamlist.service';

@Component({
  selector: 'app-teamlist-create',
  templateUrl: './teamlist-create.component.html',
  styleUrls: ['./teamlist-create.component.css']
})
export class TeamlistCreateComponent implements OnInit {
teamList: TeamList = new TeamList();
teams!: Team[];
people!: TeamMember[];
myteam! :Team;
userid!: number;
  constructor(
    private tmlsvc: TeamlistService,
    private route: ActivatedRoute,
    private tsvc: TeamService,
    private tmsvc: TeammemberService,
    private syssvc: SystemService
  ) { }
    save(): void {
      this.tmlsvc.create(this.teamList).subscribe({
        next: (res) => {console.debug("Member Added");},
        error: (err) => {console.error(err);}
      });
    }
  ngOnInit(): void {

    this.tsvc.list().subscribe({
      next: (res) => {this.teams = res},
      error: (err) => {console.error(err);}
    });
    this.tmsvc.list().subscribe({
      next: (res) => {this.people =res;},
      error: (err) => {console.error(err);}
    });
    


  }

}
