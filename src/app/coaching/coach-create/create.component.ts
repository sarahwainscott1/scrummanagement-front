import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { Coach } from '../coach.class';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
coach: Coach = new Coach();
team!: TeamMember[];
person: string = "";
  constructor(
    private csvc: CoachService,
    private route: ActivatedRoute,
    private router: Router,
    private tmsvc: TeammemberService
  ) { }
    save(): void {
      this.csvc.create(this.coach).subscribe({
        next: (res) => {console.debug("Coaching created");
        this.router.navigateByUrl(`/teammember/coaching/${this.coach.teamMemberId}`);},
        error: (err) => {console.error(err);}
      });
    }

  ngOnInit(): void {
    let teamId: number = +this.route.snapshot.params["id"];
    this.coach.teamMemberId = teamId;
    this.tmsvc.detail(this.coach.teamMemberId).subscribe({
      next: (res) => {this.person = res.name;},
      error: (err) => {console.error(err);}
    });
  }

}
