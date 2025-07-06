import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  @Output() registerSuccess = new EventEmitter<void>();
  errorMsg = '';

  constructor(private http: HttpClient) {}

  onRegisterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    this.errorMsg = '';
    this.http.post('http://localhost:8080/auth/register', { email, password }).subscribe({
      next: () => this.registerSuccess.emit(),
      error: err => {
        this.errorMsg = err?.error?.message || 'Registration failed. Please try again.';
      }
    });
  }
} 