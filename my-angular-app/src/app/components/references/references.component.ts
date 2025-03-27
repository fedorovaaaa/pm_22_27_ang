import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService, References } from '../../services/info.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
    @Input() references: References[] = [];
}
