import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMember } from './teammember.class';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService {
  baseurl: string = "http://localhost:5230/api/teammembers/";

  constructor(private http: HttpClient) { }

  list(): Observable<TeamMember[]> {
    return this.http.get(`${this.baseurl}`) as Observable<TeamMember[]>;
  }
  detail(id: number): Observable<TeamMember> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<TeamMember>;
  }
  login(email: string, password: string): Observable<TeamMember> {
    return this.http.get(`${this.baseurl}login/${email}/${password}`) as Observable<TeamMember>;
  }
  create(teamMember: TeamMember): Observable<any> {
    return this.http.post(`${this.baseurl}`, teamMember) as Observable<TeamMember>;
  }
  change(teamMember: TeamMember): Observable<any> {
    return this.http.put(`${this.baseurl}${teamMember.id}`, teamMember) as Observable<any>;
  }
  deactivate(teamMember: TeamMember): Observable<any> {
    return this.http.put(`${this.baseurl}deactivate/${teamMember.id}`, teamMember) as Observable<any>;
  }

}
