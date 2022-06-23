import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from './sprint.class';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
baseurl: string = "http://localhost:5230/api/sprints/"
  constructor(private http: HttpClient) { }
  list(): Observable<Sprint[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Sprint[]>;
  }
  detail(id: number): Observable<Sprint> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Sprint>;
  }
  create(sprint: Sprint): Observable<Sprint> {
    return this.http.post(`${this.baseurl}`, sprint) as Observable<Sprint>;
  }
  change(sprint: Sprint): Observable<any> {
    return this.http.put(`${this.baseurl}${sprint.id}`, sprint) as Observable<any>;
  }
  remove(id:number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }
}
