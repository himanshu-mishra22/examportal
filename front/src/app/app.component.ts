import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerService } from './services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent,MatProgressSpinnerModule,CommonModule]
})
export class AppComponent {
  title = 'graceMarX';

  constructor(public spinnerService: SpinnerService) {}

  
}
