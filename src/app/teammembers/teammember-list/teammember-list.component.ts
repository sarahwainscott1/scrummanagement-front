import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-teammember-list',
  templateUrl: './teammember-list.component.html',
  styleUrls: ['./teammember-list.component.css']
})
export class TeammemberListComponent implements OnInit {
  team!: TeamMember[];
  teamMember!: TeamMember;
  isSM: boolean = false;
  user!: number
  constructor(
    private tmsvc: TeammemberService,
    private syssvc: SystemService
  ) { }


    refresh(): void {
      if(this.syssvc.getLoggedInUser()?.role === "Scrum Master") {
        this.isSM=true;
      }
      this.user = +this.syssvc.getLoggedInUser()!.id;

      this.tmsvc.list().subscribe({
        next: (res) => {console.debug(res);
        this.team = res;},
        error: (err) => {console.error(err);}
        
      });
    }
  ngOnInit(): void {
    this.refresh();
  }

}
