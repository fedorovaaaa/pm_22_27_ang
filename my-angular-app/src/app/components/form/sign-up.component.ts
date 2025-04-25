import { Component } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  AbstractControl, ValidationErrors, ReactiveFormsModule
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignUpComponent {
  SignUpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.SignUpForm = this.fb.group({
      username: ['', [Validators.required, this.usernameValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  usernameValidator(control: AbstractControl): ValidationErrors | null {
    const regex = /[ @!#$%^&*()<>?/\|}{~:;,+=]/;
    return regex.test(control.value) ? { invalidUsername: true } : null;
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongPassword.test(password) ? null : { invalidPassword: true };
  }

  onSubmit() {
    if (this.SignUpForm.valid) {
      this.http.post('http://localhost:1488/register', this.SignUpForm.value).subscribe({
        next: () => alert('Реєстрація успішна'),
        error: (err) => {
          if (err.status === 409) {
            alert('Така пошта вже використовується');
          } else {
            alert('Помилка під час реєстрації');
          }
        }
      });
    }
  }
}
