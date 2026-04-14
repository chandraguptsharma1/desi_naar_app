import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  activeIndex: number = 0;
  private autoPlayInterval: any;

  carouselItems = [
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517366/desinaar-ethnic-kurta-new-collection_y3z6zm.png',
      mobileImage: 'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/red1.jpg',
      desktopTitle: 'New Collection',
      mobileTitle: 'New Arrivals',
      buttonText: 'Explore Now',
    },
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517383/mens-festive-kurta-collection-india_eop4yj.png',
      mobileImage: 'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/yellow2.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
    },
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517361/designer-embroidered-kurta-for-men_bve76k.png',
      mobileImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517047/mens-festive-kurta-collection-india.png_ykludi.png',
      desktopTitle: 'Elegant Ethnicwear',
      mobileTitle: 'Ethnic Looks',
      buttonText: 'View Collection',
    },
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.pauseAutoPlay();
  }

  startAutoPlay(): void {
    this.pauseAutoPlay(); // double interval se bachao
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  pauseAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
  }

  prevSlide(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
  }
}