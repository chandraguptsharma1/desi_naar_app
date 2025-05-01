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
        'https://lh6.googleusercontent.com/proxy/5i49jUVl9uK4XiEsqbfhLOVpx8tXKGsY0i_WzMVc6vISfABh_sNg5aHogLo3BnVni-UXDqSnJJNPtUQkv5-40MZBm4qJOoxawwqbUm-R29C-0x7qTgv5JQmupgQ9PjII',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/collageImages/Picture4.jpg',
      desktopTitle: 'Luxury Drapes',
      mobileTitle: 'Drapes for All Occasions',
      buttonText: 'Explore Now',
    },
    {
      desktopImage:
        'https://lh3.googleusercontent.com/proxy/KHKv0uh7_ijjbuVh_5OsN5yiFVZAVtRzhBG6ug1Voq4wG5q14673cKPk13_eJcu5yit5TR4Bjg8Mcl9VvgSsNs-CS5L5SMrGQO2FQvK3cgfR4E9pl3NSwdgXUnzxUhsPwUFxlOXryy7xGAqy3fP54NhFUv9OlbkT24JYMJmJ',
      mobileImage:
        'https://ewppyeqhqylgauppwvjd.supabase.co/storage/v1/object/public/3gContent/desinaar/collageImages/Picture5.jpg',
      desktopTitle: 'Festive Styles',
      mobileTitle: 'Festive Looks',
      buttonText: 'Shop Festive',
    },
    {
      desktopImage:
        'https://lh6.googleusercontent.com/proxy/khBGxJ_zk_kwwOFBKmkGcrW4Rv-03rBPr4ODgJkTMOHZ07iWv3FZltVQrtJL4hSphWrf8xbzz6qgiQ62_3hRQh9i1qk27LNtU1C1uG117H9ZUZvUZVrtDYxiiK3RlqQ',
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
