import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../../app/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.user = this.login.getUser();
    
  }
  user:any = null;

constructor(private login:LoginService){}
}
