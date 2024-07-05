import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public loginStatus = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  getCurrentUser(): Observable<any> {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/current-user`, { headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //token generation
  public generateToken(loginData:any){
  return this.http.post(`${baseUrl}/generate-token`,loginData)}

    //login user--->token into localStorage
    public loginUser(token: any){
      localStorage.setItem('token',token);
      return true;
    }

    //isLogin
    public isLoggedIn(){
      let tokenStr = localStorage.getItem("token");
      if(tokenStr == undefined || tokenStr=='' || tokenStr== null){
        return false;
      }else{
      return true;
    }
  }

    //logout--->token and user remove from the localStorage
    public logout(){
      console.log('Logout method called');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  console.log('Token and user removed from local storage');
      return true;
    }

    //retriving token from localStorage
    public getToken(){
      const token = localStorage.getItem('token');
      console.log('Retrieving token:', token);  
      return token;
    }

    //set userDetaiil
    public setUser(user:any){
      localStorage.setItem('user',JSON.stringify(user));
    }

    //getUser
    public getUser(){
      let user = localStorage.getItem('user');
      if(user != null){
        return JSON.parse(user);
      }else{
        this.logout();
        return null;
      }
    }

    //getUserRole
    public getUserRole(){
      let user = this.getUser();
      return user.authorities[0].authority;
    }







}


