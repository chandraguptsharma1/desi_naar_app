import { Component } from '@angular/core';

@Component({
  selector: 'app-lookbook-aboutus',
  standalone: false,
  templateUrl: './lookbook-aboutus.component.html',
  styleUrl: './lookbook-aboutus.component.scss'
})
export class LookbookAboutusComponent {

  heroImageUrl = 'https://i.ibb.co/B2cCTDGD/Untitled-design-8-1.png';
  imageLoaded = false;

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  onImageError(): void {
    this.imageLoaded = true;
  }

}
