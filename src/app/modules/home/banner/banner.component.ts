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
      desktopImage:
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517366/desinaar-ethnic-kurta-new-collection_y3z6zm.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/red1.jpg',
      desktopTitle: '',
      mobileTitle: '',
      buttonText: 'Explore Now',
    },
    {
      desktopImage:
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517383/mens-festive-kurta-collection-india_eop4yj.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/yellow2.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
    },
    {
      desktopImage:
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517361/designer-embroidered-kurta-for-men_bve76k.png',
      mobileImage:
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517047/mens-festive-kurta-collection-india.png_ykludi.png',
      desktopTitle: 'Elegant Ethnicwear',
      mobileTitle: 'Ethnic Looks',
      buttonText: 'View Collection',
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
