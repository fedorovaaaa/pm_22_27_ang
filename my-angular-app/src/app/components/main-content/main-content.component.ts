import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { SkillsComponent } from '../skills/skills.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { ReferencesComponent } from '../references/references.component';
import { JobExperienceComponent } from '../job-experience/job-experience.component'; 

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [SkillsComponent, HobbiesComponent, ReferencesComponent, JobExperienceComponent] 
})
export class MainContentComponent implements OnInit {
  jobExperience: any[] = []; 
  skills: any[] = [];
  hobbies: any[] = [];
  references: any[] = [];

  constructor(private infoService: InfoService) {}

 ngOnInit() {
  this.infoService.getSkills().subscribe({
    next: (data) => this.skills = data,
    error: (err) => console.error('Failed to load skills', err)
  });

  this.infoService.getHobbies().subscribe({
    next: (data) => this.hobbies = data,
    error: (err) => console.error('Failed to load hobbies', err)
  });

  this.infoService.getReferences().subscribe({
    next: (data) => this.references = data,
    error: (err) => console.error('Failed to load references', err)
  });
}
}
