import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Strength } from './strength.class';

@Injectable({
  providedIn: 'root'
})
export class StrengthsService {
baseurl: string ="http://localhost:5230/api/strengths/"
  constructor(private http: HttpClient) { }
  
  list(): Observable<Strength[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Strength[]>;
  }
}
