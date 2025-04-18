import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private router:Router){}
  // Make sure menuOpen is set to false initially to keep the menu hidden
  menuOpen = false;

  // Toggle the state of menuOpen when the hamburger icon is clicked
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openproduct(){
    console.log("route to product poge")
    // this.menuOpen = !this.menuOpen;
    this.router.navigateByUrl("/P")

  }

  productpage(){
    this.router.navigate(['/products'])
  }
}
