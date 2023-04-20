import { Component, Renderer2 } from '@angular/core';
import { DarkModeServiceService } from '../services/dark-mode-service.service';
@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  constructor(private DarkModeServiceService: DarkModeServiceService) {}

  get darkMode() {
    return this.DarkModeServiceService.darkMode;
  }

  toggleDarkMode() {
    return this.DarkModeServiceService.toggleDarkMode();
  }
}
