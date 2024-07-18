import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  //addUser
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public updateUser(user:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.put(`${baseUrl}/user`, user, { headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  public getToken(){
    const token = localStorage.getItem('token');
    console.log('Retrieving token:', token);  
    return token;
  }
}
