import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  //getting token
  public getToken(){
    let token = localStorage.getItem('token');
    // console.log(token);
    return token;
  }

  //getting questions-->admin
  public getQuestions(qid:any){
   const token = this.getToken();
    if(token){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/question/quiz/all/${qid}`,{ headers })
    }else{
      throw new Error('Token is not available');
    }
  }

  //get question of quiz for active test (selected questions)-->user
  public getQuestionsQuiz(qid:any){
    const token = this.getToken();
     if(token){
       const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
       return this.http.get(`${baseUrl}/question/quiz/${qid}`,{ headers })
     }else{
       throw new Error('Token is not available');
     }
   }

  //adding question
  public addQues(ques:any){
    const token = this.getToken();
    if(token){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${baseUrl}/question/`,ques,{ headers })
    }else{
      throw new Error('Token is not available');
    }
  }

  //deleting a ques
  public deleteQues(qid:any){
    const token = this.getToken();
    if(token){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete(`${baseUrl}/question/${qid}`,{ headers })
    }else{
      throw new Error('Token is not available');
    }
  }
}
