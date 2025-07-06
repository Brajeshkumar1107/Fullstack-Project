import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationDataService } from '../shared/registration-data.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  color: string = '#954141';
  @Output() next = new EventEmitter<void>();

  botType = 'Domestic/India';
  botMessageType = 'OTP';
  botName = 'Vertoz';
  brandName = 'Vertoz Advertising';
  botLogo?: File;
  bannerImage?: File;
  shortDescription = 'Empowering Digital Landscape';
  primaryPhoneCountryCode = 'IN +91';
  primaryPhoneNumber = '22 6142 6030';
  primaryPhoneLabel = 'Inquiry';
  primaryEmail = 'Hello@Vertoz.com';
  primaryEmailLabel = 'Write to Us';
  primaryWebsite = 'https://vertoz.com/';
  primaryWebsiteLabel = 'Visit Us';
  termsAndConditionsUrl = 'https://vertoz.com/terms-of-service/';
  privacyPolicyUrl = 'https://vertoz.com/privacy-policy/';
  languageSupported = 'English';

  isLoading = false;
  errorMsg = '';

  constructor(private regData: RegistrationDataService) {}

  onBotLogoChange(event: any) {
    this.botLogo = event.target.files[0];
  }
  onBannerImageChange(event: any) {
    this.bannerImage = event.target.files[0];
  }

  onNext(event: Event) {
    event.preventDefault();
    this.regData.saveAgent({
      botType: this.botType,
      botMessageType: this.botMessageType,
      botName: this.botName,
      brandName: this.brandName,
      botLogo: this.botLogo,
      bannerImage: this.bannerImage,
      shortDescription: this.shortDescription,
      color: this.color,
      primaryPhoneCountryCode: this.primaryPhoneCountryCode,
      primaryPhoneNumber: this.primaryPhoneNumber,
      primaryPhoneLabel: this.primaryPhoneLabel,
      primaryEmail: this.primaryEmail,
      primaryEmailLabel: this.primaryEmailLabel,
      primaryWebsite: this.primaryWebsite,
      primaryWebsiteLabel: this.primaryWebsiteLabel,
      termsAndConditionsUrl: this.termsAndConditionsUrl,
      privacyPolicyUrl: this.privacyPolicyUrl,
      languageSupported: this.languageSupported
    });
    this.next.emit();
  }
}
