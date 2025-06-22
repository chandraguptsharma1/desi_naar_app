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
        'https://i.ibb.co/prn045mk/Gray-Minimalist-New-Collection-Banner.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/collageImages/Picture4.jpg',
      desktopTitle: '',
      mobileTitle: '',
      buttonText: 'Explore Now',
    },
    {
      desktopImage:
        'https://i.ibb.co/HL95VcNm/BANNER-2.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/collageImages/Picture5.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
    },
    {
      desktopImage:
        'https://i.ibb.co/rDNyP3V/BANNER-3.png',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/collageImages/Picture6.jpg',
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
