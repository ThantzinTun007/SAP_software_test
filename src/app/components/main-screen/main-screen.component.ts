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
  isProductMenu: boolean = false;
  isSupportMenu: boolean = false;
  isLearningMenu: boolean = false;
  isCommunityMenu: boolean = false;
  isPartnersMenu: boolean = false;
  isAboutMenu: boolean = false;
  visibleSection: string | null = null;
  isContact: boolean = false;

  countries = {
    americas: '/assets/images/us-flag.webp',
    uk: '/assets/images/uk-flag.png',
    brazil: '/assets/images/brazil.png',
    canada: '/assets/images/Canada-flag.png',
  };

  selectedFlag: string = this.countries.americas;

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

  onCountrySelect(selectedCountry: 'americas' | 'uk' | 'brazil' | 'canada') {
    this.selectedFlag = this.countries[selectedCountry];
  }

  togglesClose() {
    this.isMenuOpen = false;
  }

  isProductSidebar() {
    this.isProductMenu = !this.isProductMenu;
  }

  isSupportSidebar() {
    this.isSupportMenu = !this.isSupportMenu;
  }

  isLearningSidebar() {
    this.isLearningMenu = !this.isLearningMenu;
  }

  isCommunitySidebar() {
    this.isCommunityMenu = !this.isCommunityMenu;
  }

  isPartnerSidebar() {
    this.isPartnersMenu = !this.isPartnersMenu;
  }

  isAboutSidebar() {
    this.isAboutMenu = !this.isAboutMenu;
  }

  toggleContactUs() {
    this.isContact = !this.isContact;
  }
}
