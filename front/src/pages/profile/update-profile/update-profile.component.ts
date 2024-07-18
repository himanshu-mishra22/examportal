import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoginService } from '../../../app/services/login.service';
import { UserServiceService } from '../../../app/services/user-service.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [MatCardModule,MatSlideToggleModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule,MatSelectModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {
add(profileForm: NgForm) {
  if(profileForm.valid){
    const formData = profileForm.value;

    // Handle form submission logic here
    console.log('Form submitted successfully:', formData);

    // You can call your service to update the user details
    // this.userService.updateUser(formData).subscribe(...);
  } else {
    console.error('Form is invalid:', profileForm);
    alert("Password not matched");
  }
}
  



user={
  password:'',
  email:'',
  phone:'',
  firstName:'',
  lastName:'',
};
// add() {
  

//   this.login.updateUser(this.user).subscribe(
//     (data:any)=>{
//       console.log(data);
      
//     }
//   )
// }
constructor(private _route:ActivatedRoute,
  private login:UserServiceService
){}
  ngOnInit(): void {
   //
  }
 

}
