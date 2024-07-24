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
import { QuestionsService } from '../../../app/services/questions.service';
import { QuillModule } from 'ngx-quill';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [QuillModule,FormsModule,CommonModule,MatSelectModule,MatCardModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit{
category: any;
add() {
 this.questionSer.addQues(this.question).subscribe(
  (data:any)=>{
    Swal.fire({
      icon: "success",
      title: "Question added Successfully!",
      showConfirmButton: false,
      timer: 1500
    });
  },
  (error)=>{
    alert('cannot add');
    
  }
 )
}
constructor(private router:ActivatedRoute,
  private questionSer:QuestionsService
){}
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


}
