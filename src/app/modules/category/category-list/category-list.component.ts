import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {

  constructor(private router: Router) { }

  navigateTo(category: string): void {
    this.router.navigate(['/category', category]);
  }
}
