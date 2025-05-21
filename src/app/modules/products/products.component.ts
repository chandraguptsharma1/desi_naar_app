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
  currentImageIndex: { [productId: string]: number } = {};

  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    console.log('product list');
    this.product.getAllProduct().subscribe((res: any) => {
      console.log('Product list', res);
      this.products = res.data;

      // Initialize carousel index and auto scroll for each product
      this.products.forEach((product: any) => {
        this.currentImageIndex[product._id] = 0;

        if (product.imageUrls.length > 1) {
          setInterval(() => {
            this.currentImageIndex[product._id] =
              (this.currentImageIndex[product._id] + 1) %
              product.imageUrls.length;
          }, 2500); // 👈 Change image every 2.5 sec
        }
      });
    });
  }
  // products = [
  // {
  //   id: 1,
  //   title: 'Nike Air MX Super 2500 - Red',
  //   imageUrls:
  //     'https://i.ibb.co/b5rMtFy8/11.jpg',
  //   price: 449,
  //   originalPrice: 699,
  //   rating: 5.0,
  //   discountText: '39% OFF',
  // },
  // {
  //   id: 2,
  //   title: 'Adidas Cloudfoam Pro',
  //   imageUrls:
  //     'https://i.ibb.co/0RHTf8pm/10.jpg',
  //   price: 299,
  //   originalPrice: 449,
  //   rating: 4.5,
  //   discountText: '33% OFF',
  // },
  // {
  //   id: 3,
  //   title: 'Puma Revolution',
  //   imageUrls:
  //     'https://i.ibb.co/KjxYN0jQ/9.jpg',
  //   price: 189,
  //   originalPrice: 299,
  //   rating: 4.7,
  //   discountText: '36% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/ym0XQykd/8.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/GfCFwKst/7.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/yFLCfcth/6.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/gL8tXxnW/5.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/GfCFwKst/7.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },

  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/G4RqxLTd/3.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/vxk3S1Bv/2.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // {
  //   id: 4,
  //   title: 'New Balance 327',
  //   imageUrls:
  //     'https://i.ibb.co/PvmFh0tg/1.jpg',
  //   price: 169,
  //   originalPrice: 239,
  //   rating: 4.8,
  //   discountText: '29% OFF',
  // },
  // ];

  productDetails() {
    this.router.navigate(['/products/detail']);
  }
}
