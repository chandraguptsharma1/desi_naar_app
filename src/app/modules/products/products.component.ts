import { Component, OnInit } from '@angular/core';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products:any[]=[]
  currentImageIndex: { [productId: string]: number } = {};

  constructor(private product:ProductService){}

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
    this.product.getAllProduct().subscribe((res:any)=>{
      console.log("Product list",res)
      this.products = res.data;

      // Initialize carousel index and auto scroll for each product
    this.products.forEach((product: any) => {
      this.currentImageIndex[product._id] = 0;

      if (product.imageUrls.length > 1) {
        setInterval(() => {
          this.currentImageIndex[product._id] =
            (this.currentImageIndex[product._id] + 1) % product.imageUrls.length;
        }, 2500); // 👈 Change image every 2.5 sec
      }
    });
    })
  }
  // products = [
  //   {
  //     id: 1,
  //     name: 'Nike Air MX Super 2500 - Red',
  //     image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60',
  //     price: 449,
  //     originalPrice: 699,
  //     rating: 5.0,
  //     discountText: '39% OFF'
  //   },
  //   {
  //     id: 2,
  //     name: 'Adidas Cloudfoam Pro',
  //     image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60',
  //     price: 299,
  //     originalPrice: 449,
  //     rating: 4.5,
  //     discountText: '33% OFF'
  //   },
  //   {
  //     id: 3,
  //     name: 'Puma Revolution',
  //     image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60',
  //     price: 189,
  //     originalPrice: 299,
  //     rating: 4.7,
  //     discountText: '36% OFF'
  //   },
  //   {
  //     id: 4,
  //     name: 'New Balance 327',
  //     image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60',
  //     price: 169,
  //     originalPrice: 239,
  //     rating: 4.8,
  //     discountText: '29% OFF'
  //   }
  // ];
}
  