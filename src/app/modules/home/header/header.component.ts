import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isDrawerOpen = false;
  isDrawerVisible = false;
  isShopOpen = false;
  isLookBookOpen = false;
  isSearchOpen = false;

  toggleDrawer() {
    if (!this.isDrawerOpen) {
      this.isDrawerOpen = true;
      setTimeout(() => {
        this.isDrawerVisible = true;
      }, 10);
    } else {
      this.isDrawerVisible = false;
      setTimeout(() => {
        this.isDrawerOpen = false;
      }, 300);
    }
    this.isShopOpen = false;
    this.isLookBookOpen = false;
  }

  toggleShop() {
    this.isShopOpen = !this.isShopOpen;
  }

  toggleLookBook() {
    this.isLookBookOpen = !this.isLookBookOpen;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }
  // openproduct() {
  //   console.log('route to product poge');
  //   this.menuOpen = !this.menuOpen;
  //   this.router.navigate(['/products']);
  // }

  productpage() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.router.navigate(['/products']);
  }

  // Login() {
  //   this.router.navigate(['/auth']);
  // }
}
