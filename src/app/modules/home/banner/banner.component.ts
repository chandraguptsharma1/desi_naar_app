import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {

  activeIndex = 0;
  isPlaying = false;
  private autoPlayInterval: any;

  carouselItems = [
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517366/desinaar-ethnic-kurta-new-collection_y3z6zm.png',
      mobileImage: 'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/red1.jpg',
      desktopTitle: 'New Collection',
      mobileTitle: 'New Arrivals',
      buttonText: 'Explore Now',
      route: '/new_arrival',
      loaded: false
    },
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517383/mens-festive-kurta-collection-india_eop4yj.png',
      mobileImage: 'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/detailImages/yellow2.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
      route: '/category',
      loaded: false
    },
    {
      desktopImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517361/designer-embroidered-kurta-for-men_bve76k.png',
      mobileImage: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774517047/mens-festive-kurta-collection-india.png_ykludi.png',
      desktopTitle: 'Elegant Ethnicwear',
      mobileTitle: 'Ethnic Looks',
      buttonText: 'View Collection',
      route: '/products',
      loaded: false
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.pauseAutoPlay();
  }

  startAutoPlay(): void {
    this.pauseAutoPlay();
    this.isPlaying = true;
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  pauseAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.isPlaying = false;
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
    this.resetProgress();
  }

  prevSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.resetProgress();
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
    this.resetProgress();
  }

  resetProgress(): void {
    // Progress bar restart karo
    this.isPlaying = false;
    setTimeout(() => { this.isPlaying = true; }, 10);
  }

  onBannerClick(item: any): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}