import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  contactForm!: FormGroup;
  submitting = false;
  submitted = false;
  submitError = false;

  // Social / Contact Links — apne links yahan change karo
  whatsappUrl = 'https://wa.me/919113307494';
  instagramUrl = 'https://instagram.com/desinaar';
  facebookUrl = 'https://facebook.com/desinaar';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.submitted = false;
    this.submitError = false;

    // Apna API call yahan lagao — abhi 2 sec delay ke baad success dikha raha hai
    setTimeout(() => {
      console.log('Form Data:', this.contactForm.value);
      this.submitting = false;
      this.submitted = true;
      this.contactForm.reset();
    }, 2000);

    // API example:
    // this.contactService.sendMessage(this.contactForm.value).subscribe({
    //   next: () => { this.submitting = false; this.submitted = true; this.contactForm.reset(); },
    //   error: () => { this.submitting = false; this.submitError = true; }
    // });
  }

}
