import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-list',
  standalone: false,
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss',
})
export class CollectionListComponent {
  collections = [
    {
      name: 'DESIGNER KURTA SET',
      image: 'https://i.ibb.co/MyDJnJmr/collection1.png',
    },
    {
      name: 'KURTA JACKET SET',
      image: 'https://i.ibb.co/kVbB6w14/collection2.png',
    },
    {
      name: 'REAL MIRROR WORK',
      image: 'https://i.ibb.co/fd7vytSs/collection3.png',
    },
    {
      name: 'SHERWANI SET',
      image: 'https://i.ibb.co/4gfFkqnF/collection4.png',
    },
    
  ];
}
