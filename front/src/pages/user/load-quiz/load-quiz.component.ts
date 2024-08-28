import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';
import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
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
  private _quiz:QuizzesService,
  private router:Router

){}
  ngOnInit(): void {
    
    this._route.params.subscribe((params)=>{
      this.cid = params['cid'];
      if(this.cid == 0){
        


        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
           
            
          },
          (error)=>{
            console.log(error);
            
          }
        )
        
      }else if(this.cid == 'user-profile'){
        
        this.router.navigate(['user']);
      }
      else{
       
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



 

