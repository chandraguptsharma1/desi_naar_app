import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminproductService } from '../Services/adminproduct.service';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent implements OnInit {
  loading: boolean = false;
  products: any[] = [];
  constructor(
    private router: Router,
    private adminServices: AdminproductService
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  addProdut() {
    this.router.navigate(['/admin/products/add']);
  }

  getAllProduct() {
    this.loading = true;
    this.adminServices.getProduct().subscribe(
      (res: any) => {
        console.log('product list', res);
        if (res.statusCode == 200) {
          this.products = res.data;
          this.loading = false;
        }
      },
      (error) => {
        console.error('Error loading products', error);
        this.loading = false;
      }
    );
  }

  editProduct(product: any) {
    console.log('Edit clicked for:', product);
    // Implement your edit logic here, like navigating to an edit page or opening a modal
  }

  deleteProduct(product: any) {
    this.loading = true;
    console.log('Delete clicked for:', product);
    this.adminServices.deleteProduct(product?._id).subscribe(
      (res: any) => {
        console.log('product delte response == ', res);
        if (res.statusCode == 200) {
          this.loading = false;
          this.getAllProduct();
        }
      },
      (error) => {
        console.error('Error loading products', error);
        this.loading = false;
      }
    );
    // Show confirmation dialog and then delete from the list
  }
}
