import { Component } from '@angular/core';

interface Collections {
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
  badge?: string;
  loaded: boolean;
}

@Component({
  selector: 'app-collection-list',
  standalone: false,
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss'
})
export class CollectionListComponent {

  categories: Collections[] = [
    {
      name: 'Rutuba',
      slug: 'rutuba',
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775212894/AMAAN_KURTA_SET_uezjbp.png',
      description: 'Regal silhouettes rooted in the grandeur of Indian festive tradition.',
      itemCount: 12,
      badge: 'Festive 2026',
      loaded: false
    },
    {
      name: 'Riwayat',
      slug: 'riwayat',
      image: 'https://res.cloudinary.com/dcrcp8a3d/image/upload/v1775213199/REVE_KURTA_SET_mfqti0.png',
      description: 'Classic embroidered kurtas capturing the essence of timeless Indian craft.',
      itemCount: 8,
      loaded: false
    }
  ];
}
