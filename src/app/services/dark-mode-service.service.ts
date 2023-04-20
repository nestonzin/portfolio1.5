import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeServiceService {
  constructor() {}

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}
