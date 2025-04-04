import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService, References } from '../../services/info.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references: References[] = [];
  referenceForm: FormGroup;

  constructor(private infoService: InfoService, private fb: FormBuilder) {
    this.referenceForm = this.fb.group({
      name: '',
      address: ''
    });

    this.loadReferences();
  }

  loadReferences() {
    this.infoService.getReferences().subscribe({
      next: (data) => {
      //  console.log('Loaded references:', data);
        this.references = data;
      },
      error: (err) => {
        console.error('Error fetching references', err);
      }
    });
  }

  submit() {
    const newRef = this.referenceForm.value;
    console.log('Submitting:', newRef);
    this.infoService.addReference(newRef).subscribe({
      next: () => {
        this.referenceForm.reset();
        this.loadReferences();
      },
      error: err => console.error('Failed to add reference', err)
    });
  }
}
