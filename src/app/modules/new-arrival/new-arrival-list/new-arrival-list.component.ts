import { Component } from '@angular/core';

interface Product {
  name: string;
  collection: string;
  fabric: string;
  price: number;
  image: string;
  badge: string;
  colors: string[];
  loaded: boolean;
}

@Component({
  selector: 'app-new-arrival-list',
  standalone: false,
  templateUrl: './new-arrival-list.component.html',
  styleUrl: './new-arrival-list.component.scss'
})
export class NewArrivalListComponent {

  filters = ['All', 'Rutuba', 'Riwayat', 'Kurta Set', 'Under ₹20K'];
  activeFilter = 'All';
  filteredProducts: Product[] = [];

  products: Product[] = [
    {
      name: 'Noraiz',
      collection: 'Rutuba',
      fabric: 'Pure Silk · Embroidered',
      price: 25000,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775212537/NORAIZ_KURTA_SET_tlt1h2.png',
      badge: 'New',
      colors: ['#c9a96e', '#1a1208', '#8b2a2a'],
      loaded: false
    },
    {
      name: 'Amaan',
      collection: 'Rutuba',
      fabric: 'Chanderi · Thread Work',
      price: 22500,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775212894/AMAAN_KURTA_SET_uezjbp.png',
      badge: 'New',
      colors: ['#d4a843', '#2c4a3e'],
      loaded: false
    },
    {
      name: 'Reve',
      collection: 'Riwayat',
      fabric: 'Raw Silk · Zari Border',
      price: 28000,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775213199/REVE_KURTA_SET_mfqti0.png',
      badge: 'New',
      colors: ['#c0392b', '#1a1208', '#8b7355'],
      loaded: false
    },
    {
      name: 'Vyom',
      collection: 'Riwayat',
      fabric: 'Georgette · Hand Block',
      price: 19500,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775213455/VYOM_KURTA_SET_iasn1t.png',
      badge: 'New',
      colors: ['#4a7c6f', '#c9a96e'],
      loaded: false
    },
    {
      name: 'Samaa',
      collection: 'Rutuba',
      fabric: 'Muslin · Chikankari',
      price: 25000,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775318390/Amaan_kurta_light_htve4p.png',
      badge: 'New',
      colors: ['#f0ebe2', '#8b7355'],
      loaded: false
    },
    {
      name: 'Hasrat',
      collection: 'Riwayat',
      fabric: 'Pure Cotton · Embroidered',
      price: 18000,
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775318390/Amaan_Kurta_front_side_nkpadb.png',
      badge: 'Limited',
      colors: ['#1a1208', '#5a3e2b'],
      loaded: false
    }
  ];

  ngOnInit(): void {
    this.filteredProducts = [...this.products];
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;

    if (filter === 'All') {
      this.filteredProducts = [...this.products];
    } else if (filter === 'Under ₹20K') {
      this.filteredProducts = this.products.filter(p => p.price < 20000);
    } else if (filter === 'Kurta Set') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p => p.collection === filter);
    }
  }
}
