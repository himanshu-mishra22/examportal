import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserServiceService } from '../../app/services/user-service.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule, MatIconModule,MatButtonModule, MatDividerModule, MatCardModule, FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 constructor(private userService: UserServiceService,
  private router:Router
 ){}




formSubmit() {
if(this.user.username === '' || this.user.username===null){
  Swal.fire({
    title:"Username required!"});
  return;
}

//userService ==> addUser
this.userService.addUser(this.user).subscribe(
  (data)=>{
    // console.log(data)
    Swal.fire({
      icon: "success",
      title: "User Registered Successfully!",
      showConfirmButton: false,
      timer: 1500

    });
    this.router.navigate(['/login']);
  },
(error)=>{alert("Something went wrong!")}
);
}


public user = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
};




}
