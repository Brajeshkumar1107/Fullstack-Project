import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationDataService } from '../shared/registration-data.service';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './company-info.html',
  styleUrl: './company-info.css'
})
export class CompanyInfo {
  @Output() previous = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  showDosModal = false;
  showFaqModal = false;

  // Company fields
  companyName = '';
  businessManagerName = '';
  phoneCountryCode = 'IN +91';
  phoneNumber = '';
  companyEmail = '';
  designation = '';

  isLoading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private http: HttpClient, private regData: RegistrationDataService) {}

  onPrevious() {
    this.previous.emit();
  }

  openDosModal() {
    this.showDosModal = true;
    this.showFaqModal = false;
  }

  openFaqModal() {
    this.showFaqModal = true;
    this.showDosModal = false;
  }

  closeModal() {
    this.showDosModal = false;
    this.showFaqModal = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.errorMsg = '';
    this.successMsg = '';
    this.isLoading = true;

    const formData = new FormData();
    formData.append('companyName', this.companyName);
    formData.append('businessManagerName', this.businessManagerName);
    formData.append('phoneCountryCode', this.phoneCountryCode);
    formData.append('phoneNumber', this.phoneNumber);
    formData.append('companyEmail', this.companyEmail);
    formData.append('designation', this.designation);

    this.http.post('http://localhost:8080/registration/company-info', formData).subscribe({
      next: (res: any) => {
        // After company info is submitted, call dashboard endpoint
        this.http.get('http://localhost:8080/registration/dashboard').subscribe({
          next: (dashboardData: any) => {
            this.isLoading = false;
            this.successMsg = res?.message || 'Submitted successfully!';
            // You can handle dashboardData as needed, e.g., update a service or log
            console.log('Dashboard data after submit:', dashboardData);
            setTimeout(() => this.submit.emit(), 1500);
          },
          error: err => {
            this.isLoading = false;
            this.errorMsg = err?.error?.message || 'Dashboard fetch failed.';
          }
        });
      },
      error: err => {
        this.isLoading = false;
        this.errorMsg = err?.error?.message || 'Submission failed. Please try again.';
      }
    });
  }
}
