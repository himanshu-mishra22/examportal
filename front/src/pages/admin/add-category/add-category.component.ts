import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryServiceService } from '../../../app/services/category-service.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatCardModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule,MatIconModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
category ={
  title:'',
  description:'',
}


add() {
//validate 
if(this.category.title.trim()=='' || this.category.title==null){
  Swal.fire({
    title:"Description required!"});
  return;
}

  this._addCat.addCat(this.category).subscribe(
    (data:any)=>{
      Swal.fire({
        icon: "success",
        title: "Category added Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      this.category ={
        title:'',
        description:'',
      }
      
    },
    (error)=>{
      alert('cannot add');
      
    }

  )
}

constructor(private _addCat:CategoryServiceService){}

}
