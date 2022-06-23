import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from './story.class';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseurl: string = "http://localhost:5230/api/Stories/"
  constructor(private http: HttpClient) { }
  list(): Observable<Story[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Story[]>;
  }
  detail(id: number): Observable<Story> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Story>;
  }
  getByProduct(productId: number): Observable<Story[]> {
    return this.http.get(`${this.baseurl}product/${productId}`) as Observable<Story[]>;
  }
  getUnassigned(productId: number, sprintId: number): Observable<Story[]> {
    return this.http.get(`${this.baseurl}unassigned/${productId}/${sprintId}`) as Observable<Story[]>;
  }
  create(story: Story): Observable<any> {
    return this.http.post(`${this.baseurl}`, story) as Observable<any>;
  }
  change(story: Story): Observable<any> {
    return this.http.put(`${this.baseurl}${story.id}`, story) as Observable<any>;
  }
  remove(id:number): Observable<any> {
    return this.http.delete(`${this.baseurl}${id}`) as Observable<any>;
  }
}
