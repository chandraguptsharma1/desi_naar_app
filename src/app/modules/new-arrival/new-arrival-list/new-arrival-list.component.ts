import { Component, OnInit } from '@angular/core';
import { NewArrivalApiItem, NewArrivalService } from '../Services/new-arrival.service';

interface Product {
  id?: string;
  name: string;
  collection: string;
  fabric: string;
  price: number;
  image: string;
  badge: string;
  colors: string[];
  loaded: boolean;
  raw?: NewArrivalApiItem;
}

@Component({
  selector: 'app-new-arrival-list',
  standalone: false,
  templateUrl: './new-arrival-list.component.html',
  styleUrl: './new-arrival-list.component.scss'
})
export class NewArrivalListComponent implements OnInit {
  filters = ['All'];
  activeFilter = 'All';
  filteredProducts: Product[] = [];
  products: Product[] = [];
  loading = false;
  errorMessage = '';

  private readonly fallbackProducts: Product[] = [
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

  constructor(private newArrivalService: NewArrivalService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.getNewArrivals();
  }

  getNewArrivals(): void {
    this.loading = true;
    this.errorMessage = '';

    this.newArrivalService.getNewArrivals().subscribe({
      next: (res) => {
        const apiProducts = (res.data || []).map((item) => this.mapApiItemToProduct(item));
        this.products = apiProducts.length ? apiProducts : this.cloneFallbackProducts();
        this.buildFilters();
        this.setFilter(this.activeFilter);
        this.loading = false;
      },
      error: (err) => {
        console.error('New arrival API error:', err);
        this.errorMessage = 'Unable to load live new arrivals right now. Showing featured picks.';
        this.products = this.cloneFallbackProducts();
        this.buildFilters();
        this.setFilter('All');
        this.loading = false;
      }
    });
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

  trackByProduct(index: number, product: Product): string {
    return product.id || product.name || index.toString();
  }

  private mapApiItemToProduct(item: NewArrivalApiItem): Product {
    return {
      id: item._id,
      name: item.title || 'Untitled',
      collection: item.collectionType || 'New Arrival',
      fabric: this.getFabricLabel(item),
      price: Number(item.price || 0),
      image: this.getPrimaryImage(item),
      badge: item.isActive === false ? 'Inactive' : 'New',
      colors: this.getColorCodes(item.colors),
      loaded: false,
      raw: item
    };
  }

  private getFabricLabel(item: NewArrivalApiItem): string {
    const details = [item.fabric, item.workType].filter(Boolean);
    return details.length ? details.join(' · ') : item.description || 'Desi Naar edit';
  }

  private getPrimaryImage(item: NewArrivalApiItem): string {
    return item.imageUrls?.[0] || item.detailImages?.[0] || this.placeholderImage();
  }

  private getColorCodes(colors: NewArrivalApiItem['colors']): string[] {
    if (!colors?.length) return ['#c9a96e'];

    return colors
      .map((color) => typeof color === 'string' ? color : color?.code)
      .filter((code): code is string => !!code);
  }

  private buildFilters(): void {
    const collectionFilters = Array.from(new Set(
      this.products
        .map((product) => product.collection)
        .filter((collection) => !!collection && collection !== 'New Arrival')
    ));

    this.filters = ['All', ...collectionFilters, 'Kurta Set', 'Under ₹20K'];
  }

  private cloneFallbackProducts(): Product[] {
    return this.fallbackProducts.map((product) => ({ ...product, colors: [...product.colors], loaded: false }));
  }

  private placeholderImage(): string {
    return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 800%22%3E%3Crect width=%22600%22 height=%22800%22 fill=%22%23f5f0e8%22/%3E%3Ctext x=%22300%22 y=%22400%22 text-anchor=%22middle%22 fill=%22%238b7355%22 font-family=%22serif%22 font-size=%2232%22%3EDesi Naar%3C/text%3E%3C/svg%3E';
  }
}
