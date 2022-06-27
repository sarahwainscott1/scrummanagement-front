import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { DailyScrum } from '../dailyscrum.class';
import { DailyscrumService } from '../dailyscrum.service';

@Component({
  selector: 'app-dailyscrum-create',
  templateUrl: './dailyscrum-create.component.html',
  styleUrls: ['./dailyscrum-create.component.css']
})
export class DailyscrumCreateComponent implements OnInit {
dailyscrum :DailyScrum = new DailyScrum();
  constructor(
    private dssvc: DailyscrumService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }
  save(): void {
    let empId: number = +this.syssvc.getLoggedInUser()!.id;

    this.dssvc.create(this.dailyscrum).subscribe({
      next: (res) => {console.debug("Daily Scrum Created", res);
        this.router.navigateByUrl(`/currentsprint/${empId}`);},
      error: (err) => {console.error(err);}
    });
  }
  ngOnInit(): void {
    let sprintId: number = +this.route.snapshot.params["id"];
    this.dailyscrum.sprintId = sprintId;

  }

}
