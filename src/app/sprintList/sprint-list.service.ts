import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../sprint/sprint.class';
import { SprintList } from './sprintList.class';

@Injectable({
  providedIn: 'root'
})
export class SprintListService {
  baseurl: string = "http://localhost:5230/api/sprintLists/"
  constructor(private http : HttpClient) { }

  list(): Observable<SprintList[]> {
    return this.http.get(`${this.baseurl}`) as Observable<SprintList[]>;
  }
  detail(id: number) : Observable<SprintList> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<SprintList>;
  }
  create(sprintList: SprintList): Observable<SprintList> {
    return this.http.post(`${this.baseurl}`, sprintList) as Observable<SprintList>;
  }
  change(sprintList: SprintList): Observable<any> {
    return this.http.put(`${this.baseurl}${sprintList.id}`, sprintList) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }

}
