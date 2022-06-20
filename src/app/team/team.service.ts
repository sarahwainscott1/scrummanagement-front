import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team.class';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseurl: string = "http://localhost:5230/api/teams/";
  constructor(private http: HttpClient) { }

  list(): Observable<Team[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Team[]>;
  }
  detail(id: number): Observable<Team> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Team>;
  }
  getmyteam(userid: number): Observable<Team> {
    return this.http.get(`${this.baseurl}myteam/${userid}`) as Observable<Team>;
  }
  create(team: Team): Observable<any> {
    return this.http.post(`${this.baseurl}`, team) as Observable<any>;
  }
  change(team: Team): Observable<any> {
    return this.http.put(`${this.baseurl}${team.id}`, team) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }
}
