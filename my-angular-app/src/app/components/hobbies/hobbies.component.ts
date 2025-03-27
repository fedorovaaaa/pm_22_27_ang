import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService, Hobbies } from '../../services/info.service';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
 @Input() hobbies: Hobbies[] = [];
   isExpanded = false;

  toggleRoll() {
    this.isExpanded = !this.isExpanded;
  }


}
