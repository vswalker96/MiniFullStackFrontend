import { Injectable } from '@angular/core';
  
import { User } from './models/user';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:9090/api';


  constructor(private http: HttpClient) { }

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, user);
  }

  currentTime(): Observable<any> {
    return this.http.get(`${this.baseUrl}/time`);
  }
 
}
