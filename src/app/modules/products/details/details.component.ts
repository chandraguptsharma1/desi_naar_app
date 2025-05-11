import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  product = {
    title: 'Criss Cross Front Open Sherwani',
    price: 63995.0,
    sku: 'DD048331',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['NAVY', 'BLACK', 'LONDON GDF'],
    images: [
      'https://i.ibb.co/b5rMtFy8/11.jpg',
      'https://i.ibb.co/0RHTf8pm/10.jpg',
      'https://i.ibb.co/KjxYN0jQ/9.jpg',
      'https://i.ibb.co/ym0XQykd/8.jpg',
      'https://i.ibb.co/GfCFwKst/7.jpg',
    ],
    description:
      'Silk front open sherwani with pintucks and highlighted pocket centric design',
  };

  mainImage = this.product.images[0];

  quantity = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  isOpen: Record<
    'description' | 'extraDetails' | 'visitStore' | 'additionalInfo',
    boolean
  > = {
    description: true,
    extraDetails: false,
    visitStore: false,
    additionalInfo: false,
  };

  toggleSection(section: keyof typeof this.isOpen) {
    this.isOpen[section] = !this.isOpen[section];
  }

  recommendedProducts = [
    {
      name: 'MIHIR GUPTA IN PITRI BLACK KURTA SET WITH PATIYALA AND DUPATTA',
      price: 'from Rs.16,999.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/mihir-gupta-black-kurta',
    },
    {
      name: 'VIDHUR BLACK KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/vidhur-black-kurta',
    },
    {
      name: 'RISHABH CHAWLA IN KURTA SET WITH TROUSER AND DUPATTA',
      price: 'from Rs.19,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/rishabh-chawla-kurta',
    },
    {
      name: 'SHASHWAT BLACK KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/shashwat-black-kurta',
    },
    {
      name: 'AARV WINE KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/aarv-wine-kurta',
    },
  ];
}
