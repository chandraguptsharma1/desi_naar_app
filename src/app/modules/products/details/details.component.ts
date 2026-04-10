import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EnquiryService } from './services/enquiry.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @ViewChild('mainImg') mainImg!: ElementRef;

  productData: any;
  product: any;
  isFabricOpen: boolean = true;
  isDescriptionOpen: boolean = true;
  isDeliveryOpen: boolean = true;
  mainImage: string = '';
  detailImages: string[] = [];
  isZoomed: boolean = false;
  zoomPosition = { x: 0, y: 0 };
  zoomStyle = {};
  zoomScale = 2.5;
  videoUrl: SafeResourceUrl | null = null;
  showVideo: boolean = false;

  quantity = 1;
  selectedSize: string = '';
  selectedColor: string = '';

  // enquiry popup
  showEnquiryPopup = false;
  enquiryLoading = false;
  enquirySuccessMessage = '';
  enquiryErrorMessage = '';

  enquiryForm = {
    name: '',
    mobile: '',
    message: '',
  };

  constructor(
    private productServices: ProductService,
    private sanitizer: DomSanitizer,
    private enquiryService: EnquiryService
  ) { }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.productData = sessionStorage.getItem('selectedProduct');
    console.log('product data ', this.productData);

    if (this.productData) {
      this.product = JSON.parse(this.productData);

      if (this.product.imageUrls && this.product.imageUrls.length > 0) {
        this.mainImage = this.product.imageUrls[0];
      }

      if (this.product.detailImages && this.product.detailImages.length > 0) {
        this.detailImages = [...this.product.detailImages].sort((a, b) => {
          const getSequenceNumber = (url: string) => {
            const match = url.match(/(\d+)(?=[^/]*$)/);
            return match ? parseInt(match[1], 10) : 0;
          };
          return getSequenceNumber(a) - getSequenceNumber(b);
        });
      }

      this.detailImages = this.detailImages.filter((img) => img);

      if (this.product.videoUrl) {
        const videoId = this.extractGoogleDriveFileId(this.product.videoUrl);
        if (videoId) {
          const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
          this.videoUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        }
      }
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  openEnquiryPopup() {
    this.showEnquiryPopup = true;
    this.enquiryErrorMessage = '';
    this.enquirySuccessMessage = '';
  }

  closeEnquiryPopup() {
    this.showEnquiryPopup = false;
    this.enquiryLoading = false;
    this.enquiryErrorMessage = '';
    this.enquirySuccessMessage = '';
  }

  submitEnquiry() {
    this.enquiryErrorMessage = '';
    this.enquirySuccessMessage = '';

    const name = this.enquiryForm.name.trim();
    const mobile = this.enquiryForm.mobile.trim();
    const message = this.enquiryForm.message.trim();

    if (!name) {
      this.enquiryErrorMessage = 'Please enter your name.';
      return;
    }

    if (!mobile) {
      this.enquiryErrorMessage = 'Please enter your mobile number.';
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      this.enquiryErrorMessage = 'Please enter a valid 10-digit mobile number.';
      return;
    }

    const payload = {
      name,
      mobile,
      message,
      productId: this.product?._id || null,
      productTitle: this.product?.title || '',
      productPrice: this.product?.price || 0,
      productImage: this.mainImage || '',
      productLink: window.location.href,
      sku: this.product?.sku || '',
      size: this.selectedSize || '',
      color: this.selectedColor || '',
      quantity: this.quantity || 1,
    };

    this.enquiryLoading = true;

    this.enquiryService.createEnquiry(payload).subscribe({
      next: (res) => {
        this.enquiryLoading = false;
        this.enquirySuccessMessage =
          res?.message ||
          'Request saved successfully. Our designer will connect with you on WhatsApp or call as soon as possible.';

        this.enquiryForm = {
          name: '',
          mobile: '',
          message: '',
        };

        setTimeout(() => {
          this.closeEnquiryPopup();
        }, 2500);
      },
      error: (err) => {
        this.enquiryLoading = false;
        this.enquiryErrorMessage =
          err?.error?.message || 'Failed to save enquiry. Please try again.';
      },
    });
  }

  orderOnWhatsApp() {
    if (!this.selectedSize) {
      alert('Please select size');
      return;
    }

    if (!this.selectedColor) {
      alert('Please select color');
      return;
    }

    const phone = '919113307494';
    const productLink = window.location.href;

    const message = `Hello Desi Naar,

I want to talk to a designer regarding this product.

Product: ${this.product?.title || ''}
Price: Rs. ${this.product?.price || ''}
SKU: ${this.product?.sku || ''}
Size: ${this.selectedSize}
Color: ${this.selectedColor}
Quantity: ${this.quantity}

Product Link:
${productLink}

Please help me with more details.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  extractGoogleDriveFileId(url: string): string | null {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
  }

  setMainImage(image: string) {
    this.mainImage = image;
    this.showVideo = false;
  }

  showVideoPlayer() {
    this.showVideo = true;
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isZoomed) return;

    const img = this.mainImg.nativeElement;
    const rect = img.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const zoomWindowWidth = 150;
    const zoomWindowHeight = 150;

    let zoomX = x - zoomWindowWidth / 2;
    let zoomY = y - zoomWindowHeight / 2;

    zoomX = Math.max(0, Math.min(zoomX, rect.width - zoomWindowWidth));
    zoomY = Math.max(0, Math.min(zoomY, rect.height - zoomWindowHeight));

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    this.zoomPosition = { x: zoomX, y: zoomY };
    this.zoomStyle = {
      transform: `translate(${zoomX}px, ${zoomY}px)`,
      backgroundImage: `url(${this.mainImage})`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      backgroundSize: `${this.zoomScale * 100}%`,
    };
  }

  handleMouseEnter() {
    this.isZoomed = true;
  }

  handleMouseLeave() {
    this.isZoomed = false;
  }

  isOpen: Record<
    'description' | 'extraDetails' | 'visitStore' | 'additionalInfo',
    boolean
  > = {
      description: true,
      extraDetails: false,
      visitStore: false,
      additionalInfo: false,
    };

  toggleSection(section: keyof typeof this.isOpen) {
    this.isOpen[section] = !this.isOpen[section];
  }

  recommendedProducts = [
    {
      name: 'MIHIR GUPTA IN PITRI BLACK KURTA SET WITH PATIYALA AND DUPATTA',
      price: 'from Rs.16,999.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/mihir-gupta-black-kurta',
    },
    {
      name: 'VIDHUR BLACK KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/vidhur-black-kurta',
    },
    {
      name: 'RISHABH CHAWLA IN KURTA SET WITH TROUSER AND DUPATTA',
      price: 'from Rs.19,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/rishabh-chawla-kurta',
    },
    {
      name: 'SHASHWAT BLACK KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/shashwat-black-kurta',
    },
    {
      name: 'AARV WINE KURTA SET',
      price: 'from Rs.21,499.00',
      image: 'https://i.ibb.co/gbGG9PsX/product1.png',
      url: '/product/aarv-wine-kurta',
    },
  ];

  ngOnDestroy() {
    sessionStorage.removeItem('selectedProduct');
  }

  addToCart() {
    const token = localStorage.getItem('token');

    if (token) {
      this.productServices.addCart(this.product._id).subscribe({
        next: (res) => {
          console.log('🛒 Cart added for logged-in user:', res);
        },
        error: (err) => {
          console.error('❌ Error adding to cart:', err);
        },
      });
    } else {
      const guestCart = sessionStorage.getItem('guestCart');
      let guestItems = guestCart ? JSON.parse(guestCart) : [];

      const exists = guestItems.find(
        (item: any) => item._id === this.product._id
      );

      if (!exists) {
        guestItems.push({
          ...this.product,
          quantity: this.quantity,
        });
        sessionStorage.setItem('guestCart', JSON.stringify(guestItems));
        console.log('🛒 Product added to guest cart:', guestItems);
      } else {
        console.log('⚠️ Product already in guest cart.');
      }
    }
  }
}