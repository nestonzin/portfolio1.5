import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/nestonzz' },
    { name: 'Github', url: 'https://github.com/nestonzin' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/nestormacedojs/' },
  ];
}
