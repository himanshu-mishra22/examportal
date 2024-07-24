import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AttemptService } from '../../../app/services/attempt.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-attempts',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule,MatDividerModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './attempts.component.html',
  styleUrl: './attempts.component.css'
})
export class AttemptsComponent implements OnInit{
constructor(private _route:ActivatedRoute,
  private _attempt:AttemptService
){}
  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    // alert(this.qid);
    this._attempt.getAttempts(this.qid).subscribe(
      (data:any)=>{
        console.log(data);
        this.attempt=data;
      }
      ,(error)=>{
        console.log(error);
        

      }
    )

    
  }

qid:any;
attempt:any;

}
