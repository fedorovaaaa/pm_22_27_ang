import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  email: string = 'yourinfo@gmail.com';
}