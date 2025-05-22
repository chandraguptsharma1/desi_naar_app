import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminproductService } from '../Services/adminproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  loading: boolean = false;
  addProductForm: FormGroup;

  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  imageError = '';

  sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  colorOptions = ['Red', 'Blue', 'Green', 'Black', 'White'];

  constructor(
    private fb: FormBuilder,
    private adminProductService: AdminproductService,
    private router: Router
  ) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      sku: ['', Validators.required],
      price: ['', Validators.required],
      sizes: [[], Validators.required],
      colors: [[], Validators.required],
      fabricCare: this.fb.group({
        fabric: [''],
        color: [''],
        workType: [''],
        deliveryTimeline: [''],
        setIncludes: [''],
        kurtaLength: [''],
        pantsLength: [''],
        washCare: [''],
        styleCode: [''],
        additionalNotes: [''],
      }),
      deliveryAndReturns: this.fb.group({
        domesticShipping: [''],
        internationalShipping: [''],
        domesticTime: [''],
        internationalTime: [''],
        returnPolicy: [''],
      }),
    });
  }

  onImageChange(event: any): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      Array.from(files).forEach((file: File) => {
        this.selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  onSubmit(): void {
    this.loading = true;
    if (this.addProductForm.invalid) return;

    const formValue = this.addProductForm.value;
    const formData = new FormData();

    formData.append('title', formValue.title);
    formData.append('sku', formValue.sku);
    formData.append('price', formValue.price);
    formData.append('sizes', JSON.stringify(formValue.sizes));
    formData.append('colors', JSON.stringify(formValue.colors));
    formData.append('fabricCare', JSON.stringify(formValue.fabricCare));
    formData.append(
      'deliveryAndReturns',
      JSON.stringify(formValue.deliveryAndReturns)
    );

    this.selectedFiles.forEach((file: File) => {
      formData.append('images', file);
    });

    // Send formData to API here
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    this.adminProductService.addproduct(formData).subscribe({
      next: (response: any) => {
        if (response.statusCode == 201) {
          console.log('✅ Product uploaded successfully:', response);
          this.loading = false;
          // Optional: Reset form
          this.addProductForm.reset();
          this.imagePreviews = [];
          this.selectedFiles = [];
          if (this.fileInput) this.fileInput.nativeElement.value = '';
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        console.error('❌ Upload failed:', err);
        this.loading = false;
      },
    });
  }
}
