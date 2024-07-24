import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../app/services/login.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,RouterModule,MatButtonModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  ngOnInit(): void {
    this.user = this.login.getUser();
    
  }
  user:any = null;
  constructor(private login:LoginService){}
}
