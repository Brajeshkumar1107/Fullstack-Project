import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Registration {
  companyName: string;
  managerName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  registrations: Registration[] = [];
  isLoading = false;
  errorMsg = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRegistrations();
  }

  fetchRegistrations() {
    this.isLoading = true;
    this.errorMsg = '';
    this.http.get<Registration[]>('http://localhost:8080/registration/dashboard').subscribe({
      next: (data: any) => {
        this.registrations = (data || []);
        this.isLoading = false;
      },
      error: err => {
        this.errorMsg = err?.error?.message || 'Failed to load registrations.';
        this.isLoading = false;
      }
    });
  }

  get sortedRegistrations() {
    return this.registrations;
  }
} 