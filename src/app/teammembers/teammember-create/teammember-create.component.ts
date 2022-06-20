import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Strength } from 'src/app/strengths/strength.class';
import { StrengthsService } from 'src/app/strengths/strengths.service';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-teammember-create',
  templateUrl: './teammember-create.component.html',
  styleUrls: ['./teammember-create.component.css']
})
export class TeammemberCreateComponent implements OnInit {
teamMember: TeamMember = new TeamMember();
strengths! : Strength[];
indivstrengths: string[] = [];

  constructor(
    private tmsvc: TeammemberService,
    private route: ActivatedRoute,
    private router: Router,
    private stsvc: StrengthsService) { }

  save(): void {
    console.debug(this.indivstrengths);

    this.tmsvc.create(this.teamMember).subscribe({
      next: (res) => {console.debug("New Team Member", res);
    this.router.navigateByUrl("/teammember/list");},
    error: (err) => {console.error(err);}
    });
  }
  ngOnInit(): void {
    this.stsvc.list().subscribe({
      next: (res) => {this.strengths = res},
      error: (err) => {console.error(err)}
    });
  }

}
