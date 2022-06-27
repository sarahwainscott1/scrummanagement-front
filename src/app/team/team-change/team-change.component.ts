import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Team } from '../team.class';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-change',
  templateUrl: './team-change.component.html',
  styleUrls: ['./team-change.component.css']
})
export class TeamChangeComponent implements OnInit {
team!: Team;
products! : Product[];

  constructor(
    private tmsvc: TeamService,
    private router: Router,
    private route: ActivatedRoute,
    private psvc: ProductService,
  ) { }
save(): void {
  this.tmsvc.change(this.team).subscribe({
    next: (res) => {console.debug("Team changed");
      this.router.navigateByUrl(`/team/detail/${this.team.id}`)},
      error: (err) => {console.error(err);}
  });
}
  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.tmsvc.detail(id).subscribe({
      next: (res) => {this.team = res;},
      error: (err) => {console.error(err);}
    });
    this.psvc.list().subscribe({
      next: (res) => {this.products = res;},
      error: (err) => {console.error(err);}
    });
  }

}
