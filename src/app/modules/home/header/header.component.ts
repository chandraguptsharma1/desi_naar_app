import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isDrawerOpen = false;
  isDrawerVisible = false;
  isSearchOpen = false;
  searchQuery = '';
  cartCount = 0;
  activeRoute = '';

  // Social links — apne links yahan update karo
  instagramUrl = 'https://instagram.com/desinaar';
  facebookUrl = 'https://facebook.com/desinaar';
  whatsappUrl = 'https://wa.me/919113307494';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Current route set karo
    const url = this.router.url.replace('/', '');
    this.activeRoute = url;

    // Route change pe update karo
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.urlAfterRedirects.replace('/', '');
      });
  }

  // NAVIGATION
  homePage() { this.router.navigate(['/']); }
  productpage() { this.router.navigate(['/products']); }
  newarrivalPage() { this.router.navigate(['/new_arrival']); }
  categorypage() { this.router.navigate(['/category']); }
  collectionPage() { this.router.navigate(['/collection']); }
  contactus() { this.router.navigate(['/contact-us']); }
  aboutuspage() { this.router.navigate(['/about_us']); }
  Login() { this.router.navigate(['/login']); }
  cartPage() { this.router.navigate(['/cart']); }

  // DRAWER
  toggleDrawer() {
    if (!this.isDrawerOpen) {
      this.isDrawerOpen = true;
      setTimeout(() => { this.isDrawerVisible = true; }, 10);
    } else {
      this.isDrawerVisible = false;
      setTimeout(() => { this.isDrawerOpen = false; }, 300);
    }
  }

  // SEARCH
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) this.searchQuery = '';
  }

  closeSearchOnBackdrop(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('nb-search-overlay')) {
      this.toggleSearch();
    }
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Search:', this.searchQuery);
      this.toggleSearch();
    }
  }
}