import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  @Output() register = new EventEmitter<void>();

  onRegisterClick() {
    this.register.emit();
  }
} 