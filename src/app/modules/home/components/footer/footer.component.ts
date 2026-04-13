import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  emailId = "desinaardesignstudio@gmail.com"

  newsletterEmail = '';

  // Social links — apne links yahan update karo
  instagramUrl = 'https://instagram.com/desinaar';
  facebookUrl = 'https://facebook.com/desinaar';
  whatsappUrl = 'https://wa.me/919113307494';

  subscribeNewsletter(): void {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Newsletter subscription:', this.newsletterEmail);

    // Apna API call yahan lagao:
    // this.newsletterService.subscribe(this.newsletterEmail).subscribe({
    //   next: () => { alert('Subscribed successfully!'); this.newsletterEmail = ''; },
    //   error: () => { alert('Something went wrong. Please try again.'); }
    // });

    alert('Thank you for subscribing!');
    this.newsletterEmail = '';
  }
}
