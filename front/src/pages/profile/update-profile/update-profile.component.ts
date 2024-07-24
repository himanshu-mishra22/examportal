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
export class UpdateProfileComponent implements OnInit{
submit() {
  if(this.confPass != this.updateData.password){
    alert("Password not matched!");
    return;
  }

  this.userservice.updateUser(this.userId,this.updateData).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Success");
    },
    (error)=>{
      console.log(error);
      
    }

  )
}
  constructor(private login:LoginService,
    private userservice:UserServiceService,
    private _router:ActivatedRoute
  ){}

  userId=0;

  ngOnInit(): void {
   this.userId= this._router.snapshot.params['userId'];
  //  alert(this.userId);
  }



confPass='';
 updateData={
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
}




}
  
 

