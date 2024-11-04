import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  activeSection: string | null = null;

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }
}
