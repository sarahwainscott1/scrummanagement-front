import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { strengthList } from './strengthlist.class';

@Injectable({
  providedIn: 'root'
})
export class StrengthlistService {
  baseurl: string = "http://localhost:5230/api/strengthlists/"
  constructor(private http: HttpClient) { }

  list(): Observable<strengthList[]> {
    return this.http.get(`${this.baseurl}`) as Observable<strengthList[]>;
  }
  detail(id: number): Observable<strengthList> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<strengthList>;
  }
  change(strengthList: strengthList): Observable<any> {
    return this.http.put(`${this.baseurl}${strengthList.id}`, strengthList) as Observable<any>;
  }
  create(strengthList: strengthList): Observable<any> {
    return this.http.post(`${this.baseurl}`, strengthList) as Observable<any>;
  }
}
