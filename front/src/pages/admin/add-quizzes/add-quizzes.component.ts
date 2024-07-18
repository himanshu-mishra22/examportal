import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { QuizzesService } from '../../../app/services/quizzes.service';
import { CategoryServiceService } from '../../../app/services/category-service.service';

@Component({
  selector: 'app-add-quizzes',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './add-quizzes.component.html',
  styleUrl: './add-quizzes.component.css'
})
export class AddQuizzesComponent implements OnInit {
  constructor(private _quiz:QuizzesService,
              private cat:CategoryServiceService
  ){}
  ngOnInit(): void {
    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

add() {
  console.log(this.quizData);
  

  if(this.quizData.title.trim()=='' || (this.quizData.title==null)){
    alert("Title required!!");
    return;
}
else if(this.quizData.description.trim()=='' || (this.quizData.description==null)){
  alert("Description required!!");
  return;
}


  this._quiz.addQuiz(this.quizData).subscribe(
    (data:any)=>{
        console.log(data);
        alert('Quiz Added Successfully!');
    },
    (error)=>{
      alert('cannot add');
      console.log(error);
    }

  )
}


categories =[
  {
    cid:2,
    title:"Hindi"
  }
]

quizData = {
  title:'',
  description:'',
  maxMarks:'',
  quesNums:'',
  active:true,
  category:{
    cid:'',
  }
}

}
