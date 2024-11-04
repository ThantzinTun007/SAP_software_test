import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
})
export class MainScreenComponent implements OnInit {
  isMobileView: boolean = false;
  isSidebarOpen: boolean = false;
  isBrowser: boolean;
  isMenuOpen: boolean = false;
  isIconOpen: boolean = false;
  visibleSection: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkView();
      window.addEventListener('resize', this.checkView.bind(this));
    }
  }

  checkView(): void {
    this.isMobileView = window.innerWidth < 1270;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMobileView = !this.isMobileView;
  }

  openIcon(): void {
    this.isIconOpen = !this.isIconOpen;
  }

  toggleSection(section: string) {
    this.visibleSection = this.visibleSection === section ? null : section; // Toggle visibility
  }

  toggleSearchSection(section: string) {
    this.visibleSection = section;
    this.isMenuOpen = section === 'search';
  }

  togglesClose() {
    this.isMenuOpen = false;
  }
}
