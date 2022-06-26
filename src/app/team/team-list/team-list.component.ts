import { Component, OnInit } from '@angular/core';
import { Team } from '../team.class';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams!: Team[];
  sortColumn: string = "name";
  sortAsc: boolean = true;
  searchCriteria: string = "";
  
  constructor(
    private tsvc: TeamService,

  ) { }
  sortFn(column: string) :void {
    if(column ===this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
remove(id: number): void {
  this.tsvc.remove(id).subscribe({
    next: (res) => {console.debug("Team Deleted");
  this.refresh();},
  error: (err) => {console.error(err);}
  });
}
refresh(): void {
  this.tsvc.list().subscribe({
    next: (res) => {console.debug(res); this.teams = res;},
    error: (err) => {console.error(err);}
  });
}
  ngOnInit(): void {
    this.refresh();
  }

}
