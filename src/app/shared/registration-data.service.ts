import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegistrationDataService {
  private agentData: any = null;

  saveAgent(agent: any) {
    // Save all non-file fields to localStorage
    const { botLogo, bannerImage, ...rest } = agent;
    localStorage.setItem('agentData', JSON.stringify(rest));
    // Save files in memory only
    this.agentData = { ...rest, botLogo, bannerImage };
  }

  getAgent(): any {
    if (this.agentData) return this.agentData;
    const data = localStorage.getItem('agentData');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
} 