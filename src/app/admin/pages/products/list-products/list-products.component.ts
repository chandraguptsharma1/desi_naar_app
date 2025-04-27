import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent {
  constructor(private router: Router) {}
  products = [
    {
      id: 3,
      name: 'Besique Monroe',
      role: 'Administrator',
      createdAt: 'Sep 28, 2022',
      status: 'Active',
      image: '/images/-ytzjgg6lxK1ICPcNfXho.png',
    },
    {
      id: 7,
      name: 'James Cavier',
      role: 'Author',
      createdAt: 'Sep 28, 2022',
      status: 'Active',
      image: '/images/ddHJYlQqOzyOKm4CSCY8o.png',
    },
    {
      id: 12,
      name: 'Elvis Son',
      role: 'Editor',
      createdAt: 'Sep 28, 2022',
      status: 'Suspended',
      image: '/images/oPf2b7fqx5xa3mo68dYHo.png',
    },
    {
      id: 66,
      name: 'Dana White',
      role: 'Administrator',
      createdAt: 'Sep 28, 2022',
      status: 'Inactive',
      image: '/images/fR71TFZIDTv2jhvKsOMhC.png',
    },
  ];

  addProdut() {
    this.router.navigate(['/admin/products/add']);
  }
}
