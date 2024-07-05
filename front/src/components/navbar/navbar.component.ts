import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LoginService } from '../../app/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule ,RouterModule,HomeComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  active = false;
  user=null;

logout() {
    this.login.logout();
    window.location.reload();
}
  constructor(public login:LoginService){}

  ngOnInit(): void {
    this.active = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatus.subscribe((data)=>{
      this.active = this.login.isLoggedIn();
      this.user = this.login.getUser();
    })
  }
}
