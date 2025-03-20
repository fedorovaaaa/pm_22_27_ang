import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true, // Виправлено
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, MainContentComponent] // Тепер вони standalone
})
export class AppComponent {}
