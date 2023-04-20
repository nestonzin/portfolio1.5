import { Component, Renderer2 } from '@angular/core';
import { DarkModeServiceService } from './services/dark-mode-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio1.5';
  constructor(private DarkModeServiceService: DarkModeServiceService) {}

  get darkMode() {
    return this.DarkModeServiceService.darkMode;
  }
}
