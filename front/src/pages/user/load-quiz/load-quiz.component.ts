import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-load-quiz',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatTooltipModule,RouterModule],
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit {
  cid:any;
  quizzes:any;
constructor(private _route:ActivatedRoute,
  private _quiz:QuizzesService
){}
  ngOnInit(): void {
    
    // alert(this.cid);
    this._route.params.subscribe((params)=>{
      this.cid = params['cid'];
      if(this.cid == 0){
        console.log("Load all the quizzes");


        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
            
          },
          (error)=>{
            console.log(error);
            
          }
        )
        
      }else{
        console.log("load specific quiz");
        this._quiz.getActiveQuizzesofCategory(this.cid).subscribe(
          (data:any)=>{
            this.quizzes=data;
          },
          (error)=>{
            console.log(error);
            
          }
        )
      }
    });
   
  }
}
