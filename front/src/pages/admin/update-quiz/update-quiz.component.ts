import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoryServiceService } from '../../../app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule,RouterModule],
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{
constructor(private _route:ActivatedRoute,
  private quizSer:QuizzesService,
  private cat:CategoryServiceService,

){}


  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    // alert(this.qid);
    this.quizSer.getQuiz(this.qid).subscribe(
      (data:any)=>{
        // console.log(data);
        this.quiz=data;
        
      },
      (error)=>{
        alert('Something went wrong!');
        
      }
    );

    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        alert('Something went wrong!');
        
      }
    )
  }

qid=0;
quiz:any;
categories:any;

add() {

  //validation
  if(this.quiz.title.trim()=='' || (this.quiz.title==null)){
    Swal.fire({
      title:"Title required!"});
    return;
}
else if(this.quiz.description.trim()=='' || (this.quiz.description==null)){
  Swal.fire({
    title:"Description required!"});
  return;
}


  this.quizSer.updateQuiz(this.quiz).subscribe(
    (data:any)=>{
      Swal.fire({
        icon: "success",
        title: "Quiz updated Successfully!",
        showConfirmButton: false,
        timer: 1500
      }); 
    },
    (error)=>{
      alert('Something went wrong!');
      
    }
  )
  }

}
