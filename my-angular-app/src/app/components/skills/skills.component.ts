import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Додаємо CommonModule

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Додаємо в imports
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skills: any[] = [];
}
