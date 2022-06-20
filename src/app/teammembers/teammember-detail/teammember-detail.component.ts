import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-teammember-detail',
  templateUrl: './teammember-detail.component.html',
  styleUrls: ['./teammember-detail.component.css']
})
export class TeammemberDetailComponent implements OnInit {
  teamMember!: TeamMember;
  
  constructor(
    private tmsvc: TeammemberService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    deactivate(): void {
      this.tmsvc.deactivate(this.teamMember).subscribe({
        next: (res) => {console.debug("Deactived");
      this.refresh();},
      error: (err) => {console.error(err);}
      });
    }
    refresh(): void {
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
