import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-job-experience',
  standalone: true,
   encapsulation: ViewEncapsulation.None, // Виключає ізоляцію стилів
  imports: [CommonModule],
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.scss']
})
export class JobExperienceComponent {
  @Input() experience: any[] = [];
  isExpanded = false;

  toggleRoll() {
    this.isExpanded = !this.isExpanded;
  }
}
