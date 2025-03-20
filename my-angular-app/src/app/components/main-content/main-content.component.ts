import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SkillsComponent } from '../skills/skills.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { ReferencesComponent } from '../references/references.component';
import { JobExperienceComponent } from '../job-experience/job-experience.component'; // Оновлюємо імпорт

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [SkillsComponent, HobbiesComponent, ReferencesComponent, JobExperienceComponent] // Замінюємо ExperienceComponent
})
export class MainContentComponent implements OnInit {
  jobExperience: any[] = []; // Змінюємо назву змінної
  skills: any[] = [];
  hobbies: any[] = [];
  references: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.jobExperience = data.experience; // Замінюємо змінну
      this.skills = data.skills;
      this.hobbies = data.hobbies;
      this.references = data.references;
    });
  }
}
