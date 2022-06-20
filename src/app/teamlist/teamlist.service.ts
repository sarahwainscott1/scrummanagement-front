import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team/team.class';
import { TeamList } from './teamlist.class';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {
  baseurl: string = "http://localhost:5230/api/teamLists/";
  
  constructor(private http: HttpClient) { }

  list(): Observable<TeamList[]> {
    return this.http.get(`${this.baseurl}`) as Observable<TeamList[]>;
  }
  detail(id: number): Observable<TeamList> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<TeamList>;
  }
  create(teamList: TeamList): Observable<any> {
    return this.http.post(`${this.baseurl}`, teamList) as Observable<any>;
  }
  change(teamList: TeamList): Observable<any> {
    return this.http.put(`${this.baseurl}${teamList.id}`, teamList) as Observable<any>;
  }
}
