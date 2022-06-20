import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team/team.class';
import { TeamService } from '../team/team.service';
import { TeamMember } from '../teammembers/teammember.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
_user!: TeamMember | null;
_team!: Team | null;

  constructor(private router: Router,
    private tmsvc: TeamService) { }

setLoggedInUser(user: TeamMember) {
  this._user = user;
}
getLoggedInUser(): TeamMember | null {
  return this._user
}

}
