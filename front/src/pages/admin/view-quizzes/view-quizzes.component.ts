import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';

@Component({
  selector: 'app-view-quizzes',
  standalone: true,
  imports: [MatCardModule ,MatListModule,MatIconModule, CommonModule, FormsModule,MatButtonModule, MatDividerModule, MatIconModule,RouterModule],
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit{


deleteQuiz(qid:any) {
  this.quiz.delete(qid).subscribe(
    (data:any)=>{
      console.log(data);
      this.quizzes = this.quizzes.filter((quiz)=>quiz.qid != qid);
      alert("Quiz Deleted");
    },
    (error)=>{
      console.log(error);
      
    }
  )
}


quizzes = [
  { 
    qid:2,
    title:'abc',
    description:'abcdefghijklmnopqrstuvwxyz',
    maxMarks:'20',
    quesNums:'20',
    active:'',
    category:{
      title:'cde'
    }
  }
]

constructor(private quiz:QuizzesService){}
  ngOnInit(): void {
    this.quiz.quizzes().subscribe(
      (data:any)=>{
        console.log(data);
        this.quizzes=data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
