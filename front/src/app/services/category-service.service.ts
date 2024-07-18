import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }
  public getToken(){
    const token = localStorage.getItem('token');
    // console.log('Retrieving token:', token);  
    return token;
  }

  //load all the categories
  public categories(): Observable<any>{
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/category/`, { headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //add category
  public addCat(category:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${baseUrl}/category/`,category, { headers });
    } else {
      throw new Error('Token is not available');
    }
  }

}
