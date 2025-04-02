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
    { image: "https://blog.g3fashion.com/wp-content/uploads/2022/06/mens-kurta-styles.jpg" },
    { image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5b091f7f-dea1-4aee-b5a9-2c621e78f29e.__CR0,0,970,600_PT0_SX970_V1___.png" },
    { image: "https://www.bonsoir.co.in/cdn/shop/articles/Latest_Kurta_Pajama_Sets_for_Diwali.jpg?v=1663581986" }
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
    this.activeIndex = (this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length; // Loop back to last slide
  }
}
