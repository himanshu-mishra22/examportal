import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-instruction-page',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,MatSlideToggleModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './instruction-page.component.html',
  styleUrl: './instruction-page.component.css'
})
export class InstructionPageComponent implements OnInit {
Completed() {
  alert("Quiz Already Completed");
  this.router.navigate(['/user/0']);

}
userId:any;
qid:any;
quiz:any;
isCompleted: boolean=true;
constructor(private route:ActivatedRoute,
  private quizService:QuizzesService,
  private router:Router,
  private login:LoginService
){}
  ngOnInit(): void {
    this.userInfo();
    this.qid = this.route.snapshot.params['qid'];
    this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        
        this.quiz=data;
        // this.hasAttempted();
      },
      (error)=>{
        alert(error);
      }
    )
  }
  userInfo() {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userId = data.userId;
      }
    )
  }

  start() {
    this.router.navigate(['/start/'+ this.qid]);
    }

  public hasAttempted(){
    if(this.userId && this.qid){
      this.quizService.canTakeExam(this.userId,this.qid).subscribe(
        (hasAttempted : any)=>{
          this.isCompleted = hasAttempted;
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }
  }
}
