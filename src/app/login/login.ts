import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() register = new EventEmitter<void>();

  showLogin = true;
  errorMsg = '';
  showPassword = false;
  showRegPassword = false;

  constructor(private http: HttpClient) {}

  onLoginSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    this.errorMsg = '';
    
    this.http.post('http://localhost:8080/auth/login', { email, password }).subscribe({
      next: (response: any) => {
        const token = response?.token;
        if (token) {
          localStorage.setItem('jwtToken', token);
          this.loginSuccess.emit();
        } else {
          this.errorMsg = 'Invalid response format. Token not found.';
        }
      },
      error: err => {
        this.errorMsg = err?.error || 'Login failed. Invalid credentials.';
      }
    });
  }

  onRegisterClick() {
    this.register.emit();
  }

  toggleForm() {
    this.errorMsg = '';
    this.showLogin = !this.showLogin;
  }

  onInlineRegisterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('#reg-email') as HTMLInputElement).value;
    const password = (form.querySelector('#reg-password') as HTMLInputElement).value;
    this.errorMsg = '';
    this.http.post('http://localhost:8080/auth/register', { email, password }, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        if (res && res.toLowerCase().includes('success')) {
          this.toggleForm(); // Go back to login form after successful registration
        } else {
          this.errorMsg = res || 'Registration failed. Please try again.';
        }
      },
      error: err => {
        this.errorMsg = err?.error || 'Registration failed. Please try again.';
      }
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleRegPassword() {
    this.showRegPassword = !this.showRegPassword;
  }
}
