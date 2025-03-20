import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-hobbies',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  @Input() hobbies: any[] = [];
   isExpanded = false;

  toggleRoll() {
    this.isExpanded = !this.isExpanded;
  }
}
