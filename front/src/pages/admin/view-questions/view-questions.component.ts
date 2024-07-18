import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuestionsService } from '../../../app/services/questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-view-questions',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule,MatDividerModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './view-questions.component.html',
  styleUrl: './view-questions.component.css'
})
export class ViewQuestionsComponent implements OnInit{
  qid:any;
  qtitle:any;
  questions:any=[];

constructor(private route:ActivatedRoute,
  private quest:QuestionsService

){}
  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];
    // console.log(this.qid,this.qtitle);
    this.quest.getQuestions(this.qid).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions=data;
      },
      (error)=>{
        console.log(error);
        
      }
    );

  }

  delete(qid:any) {
    // alert(qid);
    this.quest.deleteQues(qid).subscribe(
      (data:any)=>{
        alert('Qustion Deleted!');
        this.questions = this.questions.filter((ques:any)=>ques.quesid != qid)
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  
}
