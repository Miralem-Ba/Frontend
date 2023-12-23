import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterLink } from "@angular/router";
import { UserControllerService } from "../../../openapi-client";
import Swal from 'sweetalert2'; // SweetAlert2 for displaying alerts and notifications
import {MatCardModule} from "@angular/material/card";  // Angular Material Card module for card design

// LoginComponent handles the user login functionality
@Component({
  selector: 'pm-login', // Component's custom HTML tag
  standalone: true,    // Indicates standalone usage without a module
  imports: [
    CommonModule,      // Angular common functionalities
    FormsModule,       // For template-driven forms
    MatInputModule,    // Material design input fields
    ReactiveFormsModule, // For reactive form handling
    MatButtonModule,   // Material design buttons
    RouterLink,        // For routing links within templates
    MatCardModule      // Material design card layouts
  ],
  templateUrl: './login.component.html', // Path to HTML template
  styleUrls: ['./login.component.scss']  // Path to SCSS stylesheet
})
export class LoginComponent {
  // FormGroup for managing the login form
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Email FormControl with validation
    password: new FormControl('', Validators.required) // Password FormControl with validation
  });
  loginErrorMessage: string | null = null; // Variable to store login error messages

  // Constructor with dependency injections
  constructor(
    private userControllerService: UserControllerService, // UserControllerService for API calls
    private router: Router // Angular Router for navigation
  ) {}

  // Method to handle the submission of the login form
  submit(): void {
    // Check if the form is valid
    if (this.formGroup.valid) {
      // Call the login method on UserControllerService
      this.userControllerService.login({
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }).subscribe({
        next: (response) => {
          // Handle successful login
          localStorage.setItem("ACCESS_TOKEN", response.token!); // Store the token in localStorage
          Swal.fire({ // Display a success message using SweetAlert2
            title: 'Successfully logged in',
            text: 'You are now logged in',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/products/list']); // Navigate to the products list page
          });
        },
        error: () => {
          // Handle login failure
          Swal.fire({ // Display an error message using SweetAlert2
            title: 'Login failed',
            text: 'Please check your login information',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      // Handle invalid form data
      Swal.fire({ // Display a warning message for invalid form data
        title: 'Invalid form',
        text: 'Please complete all required fields correctly',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
