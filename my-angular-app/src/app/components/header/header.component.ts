import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // ОБОВ'ЯЗКОВО!
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  email: string = 'yourinfo@gmail.com';
}