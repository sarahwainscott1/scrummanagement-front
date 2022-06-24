import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { TeamList } from 'src/app/teamlist/teamlist.class';
import { TeamlistService } from 'src/app/teamlist/teamlist.service';
import { TeammemberListComponent } from 'src/app/teammembers/teammember-list/teammember-list.component';
import { TeamMember } from 'src/app/teammembers/teammember.class';
import { TeammemberService } from 'src/app/teammembers/teammember.service';
import { Team } from '../team.class';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
team: Team = new Team();
teammembers!: TeamMember[];
products!: Product[];
teamList1: TeamList = new TeamList();
teamList2: TeamList = new TeamList();
teamList3: TeamList = new TeamList();
teamList4: TeamList = new TeamList();
teamList5: TeamList = new TeamList();
teamList6: TeamList = new TeamList();
teamList7: TeamList = new TeamList();
teamList8: TeamList = new TeamList();
teamList9: TeamList = new TeamList();
teamList10: TeamList = new TeamList();
show2: boolean = false;
show3: boolean = false;
show4: boolean = false;
show5: boolean = false;
show6: boolean = false;
show7: boolean = false;
show8: boolean = false;
show9: boolean = false;
show10: boolean = false;

  constructor(private tsvc: TeamService,
    private router: Router,
    private route: ActivatedRoute,
    private tmsvc: TeammemberService,
    private tlsvc: TeamlistService,
    private psvc: ProductService
    ) { }
    add2(): void {
      this.show2 = !this.show2!;
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
    add6(): void {
      this.show6 = !this.show6;
    }
    add7(): void {
      this.show7 = !this.show7;
    }
    add8(): void {
      this.show8 = !this.show8;
    }
    add9(): void {
      this.show9 = !this.show9;
    }
    add10(): void {
      this.show10 = !this.show10;
    }
    save(): void {
      console.debug(this.team);
      this.tsvc.create(this.team).subscribe({
        next: (res) => {console.debug("Team created", res);    
        if(this.teamList1) {
          this.teamList1.teamId = res.id;
            this.tlsvc.create(this.teamList1).subscribe({
              
              next: (res1) => {console.debug("1 person added to team");
              if(this.teamList2) {
                this.teamList2.teamId=res.id;

                this.tlsvc.create(this.teamList2).subscribe({
                  next: (res2) => {console.debug("2nd person added to team");
                  if(this.teamList3) {
                    this.teamList3.teamId =res.id;

                    this.tlsvc.create(this.teamList3).subscribe({
                      next: (res3) => {console.debug("3rd person added to team");
                      if(this.teamList4) {
                        this.teamList4.teamId=res.id;

                        this.tlsvc.create(this.teamList4).subscribe({
                          next: (res4) => {console.debug("4th person added to team");
                          if(this.teamList5) {
                            this.teamList6.teamId=res.id;

                            this.tlsvc.create(this.teamList5).subscribe({
                              next: (res5) => {console.debug("5th person added to team");
                              if(this.teamList6) {
                                this.teamList6.teamId=res.id;

                                this.tlsvc.create(this.teamList6).subscribe({
                                  next: (res6) => {console.debug("6th person added to team");
                                  if(this.teamList7) {
                                    this.teamList7.teamId=res.id;

                                    this.tlsvc.create(this.teamList7).subscribe({
                                      next: (res7) => {console.debug("7th person added to team");
                                      if(this.teamList8) {
                                        this.teamList8.teamId=res.id;

                                        this.tlsvc.create(this.teamList8).subscribe({
                                          next: (res8) => {console.debug("8th person added to team");
                                          if(this.teamList9) {
                                            this.teamList9.teamId=res.id;

                                            this.tlsvc.create(this.teamList2).subscribe({
                                              next: (res9) => {console.debug("9th person added to team");
                                              if(this.teamList10) {
                                                this.teamList10.teamId=res.id;
                                                
                                                this.tlsvc.create(this.teamList10).subscribe({
                                                  next: (res10) => {console.debug("10th person added to team");},
                                                  error: (err) => {console.error(err);}
                                                });
                                              };},
                                              error: (err) => {console.error(err);}
                                            });
                                          };},
                                          error: (err) => {console.error(err);}
                                        });
                                      };},
                                      error: (err) => {console.error(err);}
                                    });
                                  };},
                                  error: (err) => {console.error(err);}
                                });
                              };},
                              error: (err) => {console.error(err);}
                            });
                          };},
                          error: (err) => {console.error(err);}
                        });
                      };
                    },
                      error: (err) => {console.error(err);}
                    });
                  };},
                  error: (err) => {console.error(err);}
                });
              };
            },
              error: (err) => {console.error(err);}
            });
          };
          this.router.navigateByUrl("/team/list");},
      error: (err) => {console.error(err);}
      });
      }

  ngOnInit(): void {
    this.tmsvc.list().subscribe({
      next: (res) => {this.teammembers = res;},
      error: (err) => {console.error(err);}
    });
    this.psvc.list().subscribe({
      next: (res) => {this.products = res;},
      error: (err) => {console.error(err);}
    });
  }

}
