import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CategoryServiceService } from '../../../app/services/category-service.service';

@Component({
  selector: 'app-sidebar-user',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  categories:any;
  constructor(private _categories:CategoryServiceService){}
  ngOnInit(): void {
    this._categories.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
