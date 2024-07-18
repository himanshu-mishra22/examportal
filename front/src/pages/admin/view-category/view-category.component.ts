import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CategoryServiceService } from '../../../app/services/category-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [MatCardModule ,MatListModule,MatIconModule, CommonModule, FormsModule,MatButtonModule, MatDividerModule, MatIconModule,RouterModule],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css'
})
export class ViewCategoryComponent implements OnInit{
categories = [
  {
    cid:2,
    title:'programming',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam facere fugit praesentium beatae tenetur pariatur distinctio delectus, error quisquam. Pariatur at sit sunt enim optio repellendus quisquam doloribus nisi.',
  },
  {
    cid:2,
    title:'programming',
    description:'programming questions',
  },
  {
    cid:2,
    title:'programming',
    description:'programming questions',
  }
]

constructor(private _category:CategoryServiceService){}
  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        console.log(data);
        this.categories = data
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
