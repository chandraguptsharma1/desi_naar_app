import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminproductService } from '../Services/adminproduct.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  addProductForm: FormGroup;
  selectedImages: File[] = [];
  imagePreviews: string[] = [];
  imageError: string = '';
  loading = false;

  constructor(private fb: FormBuilder, private http: HttpClient,private adminProductService:AdminproductService) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      sku: ['', Validators.required],
      price: ['', Validators.required],
      originalPrice: ['', Validators.required],
      discount: [''],
      sizes: [''],
      description: ['', Validators.required],
      extraDetails: [''],
      storeInfo: [''],

      warranty: [''],
      manufacturer: [''],
      deliveryTime: [''],
      shippingCharges: [''],
      material: [''],
      origin: [''],
      weight: [''],
    });
  }

  onImageChange(event: any) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files) as File[];

    if (this.selectedImages.length + newFiles.length > 6) {
      this.imageError = 'You can upload maximum 6 images only.';
      return;
    }

    this.imageError = '';
    newFiles.forEach((file) => {
      this.selectedImages.push(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
    this.imagePreviews.splice(index, 1);

    if (this.selectedImages.length === 0) {
      this.fileInput.nativeElement.value = '';
    }
  }

  onSubmit() {
    if (this.addProductForm.invalid || this.selectedImages.length === 0) {
      this.imageError = 'Please select at least one image.';
      return;
    }

    this.loading = true;

    const formData = new FormData();
    const formValue = this.addProductForm.value;

    // Images
    for (const file of this.selectedImages) {
      formData.append('images', file);
    }

    // String fields
    formData.append('title', formValue.title);
    formData.append('sku', formValue.sku);
    formData.append('price', formValue.price);
    formData.append('originalPrice', formValue.originalPrice);
    formData.append('discount', formValue.discount);
    formData.append('description', formValue.description);
    formData.append('extraDetails', formValue.extraDetails);
    formData.append('storeInfo', formValue.storeInfo);

    // Array field (sizes)
    const sizesArray = formValue.sizes
      ? formValue.sizes.split(',').map((size: string) => size.trim())
      : [];
    formData.append('sizes', JSON.stringify(sizesArray));

    // JSON fields
    const additionalInfo = {
      warranty: formValue.warranty,
      manufacturer: formValue.manufacturer,
    };
    const shippingInfo = {
      deliveryTime: formValue.deliveryTime,
      shippingCharges: formValue.shippingCharges,
    };
    const specifications = {
      material: formValue.material,
      origin: formValue.origin,
      weight: formValue.weight,
    };

    formData.append('additionalInfo', JSON.stringify(additionalInfo));
    formData.append('shippingInfo', JSON.stringify(shippingInfo));
    formData.append('specifications', JSON.stringify(specifications));

    // ✅ Print FormData for checking
    console.log('⬇️ FormData Values:');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    // Upload to backend
    // this.http
    //   .post('http://localhost:5000/api/products/uploadProduct', formData)
    //   .subscribe({
    //     next: (res: any) => {
    //       alert('✅ Product added successfully!');
    //       this.addProductForm.reset();
    //       this.selectedImages = [];
    //       this.imagePreviews = [];
    //       this.fileInput.nativeElement.value = '';
    //       this.loading = false;
    //     },
    //     error: (err) => {
    //       console.error('❌ Error uploading:', err);
    //       alert('❌ Failed to add product. Please try again.');
    //       this.loading = false;
    //     },
    //   });
  }
}
