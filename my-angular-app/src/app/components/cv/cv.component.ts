import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  imports: [
    CommonModule,
    HeaderComponent,
    MainContentComponent
  ]
})
export class CvComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
