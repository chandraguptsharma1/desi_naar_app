import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  product = {
    name: 'RUDRA BLACK KURTA SET',
    brand: 'Kalpraaq',
    sku: 'KPD-ELEPH-BLK',
    originalPrice: 'Rs.22,424.00',
    discountedPrice: 'Rs.19,499.00',
    discount: '13% off',
    availability: '24hrs Dispatch Available',
    shipping: 'Shipping Internationally',
    images: [
      'https://i.ibb.co/gbGG9PsX/product1.png',
      'https://i.ibb.co/gbGG9PsX/product1.png',
      'https://i.ibb.co/gbGG9PsX/product1.png',
      'https://i.ibb.co/gbGG9PsX/product1.png',
      'https://i.ibb.co/gbGG9PsX/product1.png',
      'https://i.ibb.co/gbGG9PsX/product1.png',
    ],
    sizes: [
      'XS/34',
      'S/36',
      'M/38',
      'L/40',
      'XL/42',
      'XXL/44',
      '3XL/46',
      '4XL/48',
      '5XL/50',
      '6XL/52',
    ],
    estimatedDelivery: {
      orderDate: 'Feb 20',
      orderReady: 'Feb 22 - Feb 23',
      deliveryDate: 'Feb 25 - Feb 27',
    },
  };

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
