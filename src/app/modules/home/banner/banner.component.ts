import { Component } from '@angular/core';
declare var bootstrap: any; // Declare the bootstrap object
@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  activeIndex: number = 0;

  carouselItems = [
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
      desktopTitle: 'NEW COLLECTION',
      mobileTitle: 'NEW COLLECTION',
      buttonText: 'SHOP NOW',
    },
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
      desktopTitle: 'FESTIVE EDIT',
      mobileTitle: 'FESTIVE EDIT',
      buttonText: 'SHOP',
    },
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
      desktopTitle: 'SUMMER SPECIAL',
      mobileTitle: 'SUMMER VIBES',
      buttonText: 'EXPLORE',
    },
  ];

  indicators = new Array(this.carouselItems.length);

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
  }
}
