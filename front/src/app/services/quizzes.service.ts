import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http:HttpClient) { }

  public getToken(){
    const token = localStorage.getItem('token');
    // console.log('Retrieving token:', token);  
    return token;
  }

  //load all the categories
  public quizzes(): Observable<any>{
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/quiz/`, { headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //adding quiz
  public addQuiz(quiz:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${baseUrl}/quiz/`, quiz,{ headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //delete quiz
  public delete(qid:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete(`${baseUrl}/quiz/${qid}`,{ headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //get single quiz

  public getQuiz(qid:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/quiz/${qid}`,{ headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //update quiz
  public updateQuiz(quiz:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.put(`${baseUrl}/quiz/`,quiz,{ headers });
    } else {
      throw new Error('Token is not available');
    }
  }

  //getQuiz for a single category
  public getQuizOfCategory(cid:any){
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/quiz/category/${cid}`,{ headers });
    } else {
      throw new Error('Token is not available');
  }


}

 //get Active quizzes
 public getActiveQuizzes(){
  const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${baseUrl}/quiz/active` ,{ headers });
    } else {
      throw new Error('Token is not available');
  }
 }

 //get Active quizzes of category
 public getActiveQuizzesofCategory(cid:any){
  const token = this.getToken();
  if (token) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}` ,{ headers });
  } else {
    throw new Error('Token is not available');
}

 }

public  canTakeExam(userId: number, qid: number) {
  const token = this.getToken();
  if (token) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quiz/valid/${userId}/${qid}` ,{ headers });
  } else {
    throw new Error('Token is not available');
}
}

}
