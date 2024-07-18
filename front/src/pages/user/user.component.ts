import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, SidebarComponent, SignupComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
