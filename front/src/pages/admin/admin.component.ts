import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [MatListModule, SidebarComponent,MatCardModule,RouterModule]
})
export class AdminComponent {

}
