import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  constructor(private http:HttpClient) { }

  //get attempts
  // public getAttempts(qid:any){
  //   const token = this.getToken();
  //   if(token){
  //     const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //     // return this.http.get(`${baseUrl}/attempts/quiz/${qid}`, { header });
  //     return this.http.get(`${baseUrl}/question/quiz/${qid}`,{ headers })
  //   }
  // }

  public getAttempts(qid:any){
    const token = this.getToken();
     if(token){
       const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
       return this.http.get(`${baseUrl}/attempts/quiz/${qid}`,{ headers })
     }else{
       throw new Error('Token is not available');
     }
   }

   public addAttempts(attempt:any){
    const token = this.getToken();
    if(token){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${baseUrl}/attempts/save`,attempt,{ headers })
    }else{
      throw new Error('Token is not available');
    }
   }

  //getting token
  public getToken(){
    let token = localStorage.getItem('token');
    return token;
  }
}
