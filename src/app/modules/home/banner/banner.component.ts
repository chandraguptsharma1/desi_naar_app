import { Component } from '@angular/core';
declare var bootstrap: any; // Declare the bootstrap object
@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  activeIndex: number = 0; // Tracks the active slide
  carouselItems = [
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
    },
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
    },
    {
      image:
        'https://cityvibes.in/cdn/shop/articles/Artboard_6banner.png?v=1713168340&width=2048',
    },
  ];
  indicators = new Array(this.carouselItems.length); // Create indicators for the number of items

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide(); // Automatically go to next slide every 3 seconds
    }, 3000);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length; // Loop back to first slide
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length; // Loop back to last slide
  }
}
