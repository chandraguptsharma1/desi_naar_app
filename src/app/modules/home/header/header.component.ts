import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Make sure menuOpen is set to false initially to keep the menu hidden
  menuOpen = false;

  // Toggle the state of menuOpen when the hamburger icon is clicked
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
