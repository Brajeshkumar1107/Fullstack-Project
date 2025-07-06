import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { CompanyInfo } from './company-info/company-info';
import { Menu } from './menu/menu';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './register/register';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, Login, Registration, CompanyInfo, Menu, Dashboard, Register],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class App {
  protected title = 'vertoz-login';
  step: 'login' | 'menu' | 'registration' | 'company-info' | 'dashboard' | 'register-user' = 'login';

  onLoginSuccess() {
    this.step = 'menu';
  }

  onMenuRegister() {
    this.step = 'registration';
  }

  onRegistrationNext() {
    this.step = 'company-info';
  }

  onCompanyInfoPrevious() {
    this.step = 'registration';
  }

  onRegistrationPrevious() {
    this.step = 'menu';
  }

  onCompanyInfoSubmit() {
    this.step = 'dashboard';
  }
}
