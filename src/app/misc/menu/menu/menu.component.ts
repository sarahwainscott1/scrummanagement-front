import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userid!: number;
  menus: Menu[] = [
    new Menu("Login", "/teammember/login"),
    new Menu("Teams", "/team/list"),
    new Menu("My Team", `/myteam/${this.userid}`),
    new Menu("Products", "/product/list"),
    new Menu("Current Sprint", `currentsprint/${this.userid}`),
  
  ]
  
  constructor(
    private route: ActivatedRoute,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
   this.userid = +this.syssvc.getLoggedInUser()!.id;
  }

}
