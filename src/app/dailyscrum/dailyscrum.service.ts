import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyScrum } from './dailyscrum.class';

@Injectable({
  providedIn: 'root'
})
export class DailyscrumService {
  baseurl: string = "http://localhost:5230/api/dailyscrums/";
  constructor(private http: HttpClient) { }

  list(): Observable<DailyScrum[]> {
    return this.http.get(`${this.baseurl}`) as Observable<DailyScrum[]>;
  }
  detail(id: number): Observable<DailyScrum> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<DailyScrum>;
  }
  create(dailyscrum: DailyScrum): Observable<DailyScrum> {
    return this.http.post(`${this.baseurl}`, dailyscrum) as Observable<DailyScrum>;
  }
  change(dailyscrum: DailyScrum): Observable<any> {
    return this.http.put(`${this.baseurl}${dailyscrum.id}`, dailyscrum) as Observable<any>;
  }
  remove(id:number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }
}
