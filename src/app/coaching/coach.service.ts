import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from './coach.class';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  baseurl: string = "http://localhost:5230/api/coaches/";
  constructor(private http: HttpClient) { }

  list(): Observable<Coach[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Coach[]>;
  }
  detail(id: number): Observable<Coach> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Coach>;
  }
  create(coach: Coach): Observable<Coach> {
    return this.http.post(`${this.baseurl}`, coach) as Observable<Coach>;
  }
  change(coach: Coach): Observable<any> {
    return this.http.put(`${this.baseurl}${coach.id}`, coach) as Observable<Coach>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }
}
