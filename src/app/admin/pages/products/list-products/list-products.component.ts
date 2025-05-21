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
    this.adminServices.getProduct().subscribe((res: any) => {
      console.log('product list', res);
      this.products = res.data;
    });
  }
}
