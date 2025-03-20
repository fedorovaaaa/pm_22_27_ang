import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  @Input() references: any[] = [];
}
