import { CommonModule, PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuestionsService } from '../../../app/services/questions.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserServiceService } from '../../../app/services/user-service.service';
import { LoginService } from '../../../app/services/login.service';
import { AttemptService } from '../../../app/services/attempt.service';

@Component({
  selector: 'app-start-quiz',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatProgressSpinnerModule,MatDividerModule,MatButtonModule,FormsModule,RouterModule],
  templateUrl: './start-quiz.component.html',
  styleUrl: './start-quiz.component.css'
})
export class StartQuizComponent implements OnInit{
qid=0;
question:any;
marksGot =0;
correctAns =0;
attempted =0;
isSubmit=false;
timer:any;
user:any;

currentUser(){
  this.login.getCurrentUser().subscribe(
    (data:any)=>{
      this.user= data.userId;
      // console.log(this.user);
      
    },
    (error)=>{
      console.log(error);
    }
  );
    
}


  ngOnInit(): void {
    this.noBack();
    this.qid= this.route.snapshot.params['qid'];
    // console.log('qid:', this.qid, typeof(this.qid));

    this.loadQuestions();
    this.currentUser();
  }
constructor(private platformLocation:PlatformLocation,
  private route:ActivatedRoute,
  private questions:QuestionsService,
  private login:LoginService,
  private _attempt:AttemptService
){}


  noBack(){
    history.pushState(null, '' ,location.href);
    this.platformLocation.onPopState(()=>{
      history.pushState(null, '' ,location.href);
    });
  }

  loadQuestions(){
    this.questions.getQuestionsQuiz(this.qid).subscribe(
      (data:any)=>{
       
        this.question=data;
        this.timer = this.question.length * 2 *60;

        this.question.forEach((q:any) => {
          q['givenAns']='';
          
        });
       
        this.startTimer();
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  submit(){
    this.isSubmit=true;
    //create a confirm box


    //calculate marks
    this.question.forEach((q:any)=> {
      if(q.givenAns == q.ans){
        this.correctAns++;
        let singleQuesMarks = this.question[0].quiz.maxMarks/this.question.length;
        this.marksGot += singleQuesMarks;
        this.marksGot = parseFloat(this.marksGot.toFixed(2));
      }
      if(q.givenAns.trim() != ''){
        this.attempted++;
      }
    });

    //attempted data
    const attemptData = {
      marks: this.marksGot,
    };

    // console.log(attemptData);
    

    this._attempt.addAttempts(this.qid,this.user,attemptData).subscribe(
      (data:any)=>{
        // console.log(data);
        alert("submitted");
      },(error)=>{
        console.log(error);
        console.log("data not saved");
      }
    );
  }

  startTimer(){
   let t =  window.setInterval(()=>{
      if(this.timer<=0){
        this.submit();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  timeFormat(){
    let m = Math.floor(this.timer/60);
    let s = this.timer - m*60;
    return `${m}min : ${s}sec `;
  }


  attempt={
    
  }
}
