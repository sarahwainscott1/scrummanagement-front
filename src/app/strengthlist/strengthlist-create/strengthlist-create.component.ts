import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Strength } from 'src/app/strengths/strength.class';
import { StrengthsService } from 'src/app/strengths/strengths.service';
import { strengthList } from '../strengthlist.class';
import { StrengthlistService } from '../strengthlist.service';

@Component({
  selector: 'app-strengthlist-create',
  templateUrl: './strengthlist-create.component.html',
  styleUrls: ['./strengthlist-create.component.css']
})
export class StrengthlistCreateComponent implements OnInit {
  teammemberid!: number;
  strengthlist1: strengthList = new strengthList();
  strengthlist2: strengthList = new strengthList();
  strengthlist3: strengthList = new strengthList();
  strengthlist4: strengthList = new strengthList();
  strengthlist5: strengthList = new strengthList();
  strengths!: Strength[];
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;

  constructor(
    private slsvc: StrengthlistService,
    private route: ActivatedRoute,
    private router: Router,
    private ssvc: StrengthsService
  ) { }
    add2(): void {
      this.show2 = !this.show2;
    }
    add3(): void {
      this.show3 = !this.show3;
    }
    add4(): void {
      this.show4 = !this.show4;
    }
    add5(): void {
      this.show5 = !this.show5;
    }
    save(): void {
      this.slsvc.create(this.strengthlist1).subscribe({
        next: (res) => {console.debug("1 strength added");
        },
        error: (err) => {console.error(err);}
      });
      if(this.strengthlist2.strengthId) {
        this.slsvc.create(this.strengthlist2).subscribe({
          next: (res) => {console.debug("2nd strength added");
          },
          error: (err) => {console.error(err);}
        });
      }
      if(this.strengthlist3.strengthId) {
        this.slsvc.create(this.strengthlist3).subscribe({
          next: (res) => {console.debug("3rd strength added");
          },
          error: (err) => {console.error(err);}
        });
      }
      if(this.strengthlist4.strengthId) {
        this.slsvc.create(this.strengthlist4).subscribe({
          next: (res) => {console.debug("4th strength added");
          },
          error: (err) => {console.error(err);}
        });
      }
      if(this.strengthlist5.strengthId) {
        this.slsvc.create(this.strengthlist5).subscribe({
          next: (res) => {console.debug("5th strength added");
          this.router.navigateByUrl(`/teamMember/detail/${this.teammemberid}`)},
          error: (err) => {console.error(err);}
        });
      }

    }
  ngOnInit(): void {
    this.teammemberid = +this.route.snapshot.params["id"];
    this.strengthlist1.teamMemberId = this.teammemberid;
    this.strengthlist2.teamMemberId = this.teammemberid;
    this.strengthlist3.teamMemberId = this.teammemberid;
    this.strengthlist4.teamMemberId = this.teammemberid;
    this.strengthlist5.teamMemberId = this.teammemberid;

    this.ssvc.list().subscribe({
      next: (res) => {this.strengths = res},
      error: (err) => {console.error(err);}

    });
  }

}
