
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../app/services/login.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule, MatIconModule,MatButtonModule, MatDividerModule, MatCardModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private login: LoginService,
    private router:Router
  ) {}


  loginData = {
    username: '',
    password: '',
  };

  formSubmit() {
    // console.log('button clicked');
    // console.log('Login Data:', this.loginData); // Debug log

    if (this.loginData.username.trim() === '' || this.loginData.username == null) {
      Swal.fire({
        title:"Username required!"});
      return;
    }

    if (this.loginData.password.trim() === '' || this.loginData.password == null) {
      Swal.fire({
        title:"Password required!"});
      return;
    }

    

    // Generate token from server
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        // console.log('Token received:', data.token);

        // Log in the user
        this.login.loginUser(data.token);

        // Fetch and set the current user
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            // console.log('User:', user); // Debug log
            //redirection-->
            if(this.login.getUserRole()==="ADMIN"){
              //admin dashboard
              this.router.navigate(['admin']);
              this.login.loginStatus.next(true);



            }else if(this.login.getUserRole()==="NORMAL"){
              //normal user dashboard
              this.router.navigate(['user']);
              this.login.loginStatus.next(true);

            }else{
              this.login.logout();
            }
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Login failed!",
              text: "Username or password Incorrect",
            });
          }
        );
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "Username or password Incorrect",
        });
      }
    );
  }

 
}


