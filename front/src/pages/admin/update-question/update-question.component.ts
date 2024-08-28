import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { QuestionsService } from '../../../app/services/questions.service';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [QuillModule,FormsModule,CommonModule,MatSelectModule,MatCardModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule],
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.css'
})
export class UpdateQuestionComponent implements OnInit{
add() {
this.questionSer.updateQues(this.question).subscribe(
  (data:any)=>{
    console.log(data);
    alert("updated");
  },
  (error)=>{
    console.log(error);
    
  }
)
}
  ngOnInit(): void {
    this.qid = this.router.snapshot.params['qid'];
    this.qtitle = this.router.snapshot.params['qtitle'];
    // alert(this.qid this.qtitle);
    this.question.quiz['qid'] = this.qid;
  }
  qid:any;
  qtitle:any;
  question:any={
    quiz:{},
    content:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:'',
  }

  constructor(private router:ActivatedRoute,
    private questionSer:QuestionsService
  ){}


}
