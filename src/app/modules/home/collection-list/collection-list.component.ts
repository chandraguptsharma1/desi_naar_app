import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-list',
  standalone: false,
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss',
})
export class CollectionListComponent {

  constructor(private router: Router) { }

  collections = [
    {
      number: '01',
      name: 'Rutuba',
      description: 'Regal silhouettes rooted in the grandeur of Indian festive tradition.',
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774280281/AMAAN_YELLOW_KURTA_SET_3_mhfbj8.jpg',
      itemCount: 12,
      loaded: false
    },
    {
      number: '02',
      name: 'Riwayat',
      description: 'Classic embroidered kurtas capturing the essence of timeless Indian craft.',
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1774280280/VYOM_BLACK_KURTA_SET_g76pem.jpg',
      itemCount: 8,
      loaded: false
    }
  ];

  productpage(collectionName: string) {
    sessionStorage.setItem('collectionType', JSON.stringify(collectionName));
    this.router.navigate(['/products']);
  }

  goToCategory() {
    this.router.navigate(['/category']);
  }
}