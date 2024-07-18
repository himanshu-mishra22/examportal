import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  logout() {
    this.login.logout();
    window.location.reload();
}

constructor(private login:LoginService){}

}
