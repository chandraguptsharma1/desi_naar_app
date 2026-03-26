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
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517047/mens-festive-kurta-collection-india.png_ykludi.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/red1.jpg',
      desktopTitle: '',
      mobileTitle: '',
      buttonText: 'Explore Now',
    },
    {
      desktopImage:
        'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517040/desinaar-ethnic-kurta-new-collection.png_qijo0k.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/yellow2.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
    },
    {
      desktopImage:
        'https://i.ibb.co/rDNyP3V/BANNER-3.png',
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
