import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterLink } from "@angular/router";
import { UserControllerService } from "../../../openapi-client";
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications
import {MatCardModule} from "@angular/material/card";  // Import Angular Material Card module

// LoginComponent - Responsible for handling user login process
@Component({
  selector: 'pm-login', // Selector to use this component in HTML
  standalone: true,    // Standalone component, no module required
  imports: [
    CommonModule,      // Imports Angular directives such as ngIf and ngFor
    FormsModule,       // Supports template-driven forms
    MatInputModule,    // Angular Material module for input fields
    ReactiveFormsModule, // Supports reactive form approach
    MatButtonModule,   // Angular Material module for buttons
    RouterLink,        // Directive for linking routes in templates
    MatCardModule      // Angular Material module for cards
  ],
  templateUrl: './login.component.html', // Links to the component's HTML template
  styleUrls: ['./login.component.scss']  // Links to the component's SCSS stylesheet
})
export class LoginComponent {
  // FormGroup to manage form data and validation
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Validation for email
    password: new FormControl('', Validators.required) // Validation for password
  });
  loginErrorMessage: string | null = null; // Variable for error messages

  // Constructor with dependency injection
  constructor(
    private userControllerService: UserControllerService, // Inject UserControllerService
    private router: Router // Inject Angular Router
  ) {}

  // Method to handle form submission
  submit(): void {
    if (this.formGroup.valid) {
      // Perform login request if the form is valid
      this.userControllerService.login({
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }).subscribe({
        next: (response) => {
          // Handle successful login
          localStorage.setItem("ACCESS_TOKEN", response.token!);
          Swal.fire({
            title: 'Successfully logged in',
            text: 'You are now logged in',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/products/list']);
          });
        },
        error: () => {
          // Handle login failure
          Swal.fire({
            title: 'Login failed',
            text: 'Please check your login information',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      // Handle invalid form data
      Swal.fire({
        title: 'Invalid form',
        text: 'Please complete all required fields correctly',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
