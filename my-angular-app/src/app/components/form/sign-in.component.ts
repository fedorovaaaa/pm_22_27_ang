import { Component } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  AbstractControl, ValidationErrors, ReactiveFormsModule
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
    return valid ? null : { invalidPassword: true };
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.http.post('http://localhost:1444/login', { email, password }).subscribe({
        next: (res: any) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(['/cv']);
        },
        error: () => alert('Невірний email або пароль')
      });
    }
  }
}
