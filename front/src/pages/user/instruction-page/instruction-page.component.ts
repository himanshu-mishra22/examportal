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

@Component({
  selector: 'app-instruction-page',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,MatSlideToggleModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './instruction-page.component.html',
  styleUrl: './instruction-page.component.css'
})
export class InstructionPageComponent implements OnInit {

qid:any;
quiz:any;
constructor(private route:ActivatedRoute,
  private quizService:QuizzesService,
  private router:Router
){}
  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    // alert(this.qid);  
    
    
    this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        console.log(data);
        this.quiz=data;
      },
      (error)=>{
        alert(error);
      }
    )
  }

  start() {
    this.router.navigate(['/start/'+ this.qid]);
    }
}
