import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registration: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registration = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.registration.invalid) {
      this.errorMessage = 'Please fill all fields correctly.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.loginService.loginuser(this.registration.value).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          console.log('Login Response:', response);

          // Save token and user details
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));

          // Show success toast
          this.toastr.success('Login successful!', 'Success');

          // Redirect to dashboard (example path)
          this.router.navigate(['/admin']);
        } else {
          this.toastr.error(response.message || 'Login failed.', 'Error');
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Login Error:', error);
        this.toastr.error(error.error.message || 'Login failed.', 'Error');
        this.loading = false;
      },
    });
  }
}
