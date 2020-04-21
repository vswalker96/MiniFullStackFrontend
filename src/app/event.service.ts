import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:9090/api';

  constructor(private http: HttpClient) { }

  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/event`, event);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/event`);
  }

  getEventById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/event/${id}`);
  }

  getEventByUserId(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/event/user/${id}`);
  }

}
