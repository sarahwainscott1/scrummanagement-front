import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { TeamMember } from '../teammember.class';
import { TeammemberService } from '../teammember.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string = "";
password: string = "";
message: string = "";
  constructor(
    private syssvc: SystemService,
    private tmsvc: TeammemberService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
    login(): void {
      this.message = "";
      this.tmsvc.login(this.email, this.password).subscribe({
        next: (res) => {console.debug("Successful login");
        this.syssvc.setLoggedInUser(res);
        this.router.navigateByUrl("/team/list");},
        error: (err) => {if(err.status == 404) {this.message = "Incorrect login information"};
        console.error(err);}
      });
    }
  ngOnInit(): void {

  }

}
