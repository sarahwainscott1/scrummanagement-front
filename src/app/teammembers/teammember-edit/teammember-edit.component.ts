import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { strengthList } from 'src/app/strengthlist/strengthlist.class';
import { StrengthlistService } from 'src/app/strengthlist/strengthlist.service';
import { Strength } from 'src/app/strengths/strength.class';
import { StrengthsService } from 'src/app/strengths/strengths.service';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-teammember-edit',
  templateUrl: './teammember-edit.component.html',
  styleUrls: ['./teammember-edit.component.css']
})
export class TeammemberEditComponent implements OnInit {
  teamMember!: TeamMember;
  strengths!: Strength[];
  strengthlist! : strengthList;
  

  constructor(
    private tmsvc: TeammemberService,
    private route: ActivatedRoute,
    private router: Router,
    private stlsvc: StrengthlistService,
    private ssvc: StrengthsService

  ) { }

  
    save(): void {
      
      this.tmsvc.change(this.teamMember).subscribe({
        next: (res) => {console.log("Team Member changed",this.teamMember);
      },
      error: (err) => {console.error(err);}
      });
      this.stlsvc.change(this.teamMember.strengthList[0]).subscribe({
        next: (res) => {console.debug("1 strength changed", res);},
        error: (err) => {console.error(err);}
      });
      console.debug(this.teamMember.strengthList[0]);
      this.stlsvc.change(this.teamMember.strengthList[1]).subscribe({
        next: (res) => {console.debug("2 strength changed");},
        error: (err) => {console.error(err);}
      });
      this.stlsvc.change(this.teamMember.strengthList[2]).subscribe({
        next: (res) => {console.debug("3 strength changed");},
        error: (err) => {console.error(err);}
      });
      this.stlsvc.change(this.teamMember.strengthList[3]).subscribe({
        next: (res) => {console.debug("4 strength changed");},
        error: (err) => {console.error(err);}
      });
      this.stlsvc.change(this.teamMember.strengthList[4]).subscribe({
        next: (res) => {console.debug("5 strength changed");},
        error: (err) => {console.error(err);}
      });



    }
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.tmsvc.detail(id).subscribe({
      next: (res) => {
        this.teamMember = res;
        console.debug(res);
      },
      error: (err) => {console.error(err);}
    });
    this.ssvc.list().subscribe({
      next: (res) => {this.strengths = res},
      error: (err) => {console.error(err);}
    });
    
  }

}
