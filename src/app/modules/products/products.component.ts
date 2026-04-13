import { Component, OnInit } from '@angular/core';
import { ProductService } from './Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  collectionType: any;
  loading: boolean = false;

  staticProducts = [
    {
      title: 'Noraiz',
      collectionName: 'Rutuba',
      fabric: 'Pure Silk · Embroidered',
      price: 25000,
      badge: 'New',
      colors: ['#c9a96e', '#1a1208', '#8b2a2a'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775212537/NORAIZ_KURTA_SET_tlt1h2.png'],
      _loaded: false
    },
    {
      title: 'Amaan',
      collectionName: 'Rutuba',
      fabric: 'Chanderi · Thread Work',
      price: 22500,
      badge: 'New',
      colors: ['#d4a843', '#2c4a3e'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775212894/AMAAN_KURTA_SET_uezjbp.png'],
      _loaded: false
    },
    {
      title: 'Reve',
      collectionName: 'Riwayat',
      fabric: 'Raw Silk · Zari Border',
      price: 28000,
      badge: 'New',
      colors: ['#c0392b', '#1a1208', '#8b7355'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775213199/REVE_KURTA_SET_mfqti0.png'],
      _loaded: false
    },
    {
      title: 'Vyom',
      collectionName: 'Riwayat',
      fabric: 'Georgette · Hand Block',
      price: 19500,
      badge: 'New',
      colors: ['#4a7c6f', '#c9a96e'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775213455/VYOM_KURTA_SET_iasn1t.png'],
      _loaded: false
    },
    {
      title: 'Samaa',
      collectionName: 'Rutuba',
      fabric: 'Muslin · Chikankari',
      price: 25000,
      badge: 'New',
      colors: ['#f0ebe2', '#8b7355'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775318390/Amaan_kurta_light_htve4p.png'],
      _loaded: false
    },
    {
      title: 'Hasrat',
      collectionName: 'Riwayat',
      fabric: 'Pure Cotton · Embroidered',
      price: 18000,
      badge: 'Limited',
      colors: ['#1a1208', '#5a3e2b'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775318390/Amaan_Kurta_front_side_nkpadb.png'],
      _loaded: false
    },
    {
      title: 'Nayaab',
      collectionName: 'Rutuba',
      fabric: 'Brocade · Zardozi',
      price: 42000,
      badge: 'Exclusive',
      colors: ['#8b2a2a', '#c9a96e', '#1a1208'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775327449/Nayaab_center_view_rkx22s.png'],
      _loaded: false
    },
    {
      title: 'Rutuba Classic',
      collectionName: 'Rutuba',
      fabric: 'Silk Blend · Hand Embroidered',
      price: 32000,
      badge: 'New',
      colors: ['#2c4a3e', '#c9a96e'],
      imageUrls: ['https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775327819/Rutuba_right_nq60oy.png'],
      _loaded: false
    }
  ];

  constructor(private productServices: ProductService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.collectionType = sessionStorage.getItem('collectionType');
    this.getAllProduct();
  }

  getAllProduct() {
    let cleanCollectionType = this.collectionType?.replace(/"/g, '').trim();
    this.loading = true;

    this.productServices.getAllProduct(cleanCollectionType).subscribe({
      next: (res: any) => {
        this.products = res.data?.length ? res.data : this.staticProducts;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        // API fail hone pe static data dikha do
        this.products = this.staticProducts;
        this.loading = false;
      }
    });
  }

  getImageUrl(imageUrl: string): string {
    try {
      const parsed = JSON.parse(imageUrl);
      if (Array.isArray(parsed)) return parsed[0];
      return parsed;
    } catch {
      return imageUrl;
    }
  }

  productDetails(product: any) {
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/products/detail']);
  }

  addToCart(product: any) {
    console.log('Add to cart:', product.title);
  }

  addToWishlist(product: any) {
    console.log('Add to wishlist:', product.title);
  }
}