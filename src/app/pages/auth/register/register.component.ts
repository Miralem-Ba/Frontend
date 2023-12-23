import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { UserControllerService } from "../../../openapi-client"; // Ensure this path is correct
import Swal from 'sweetalert2'; // SweetAlert2 for user notifications

// Component decorator for RegisterComponent
@Component({
  selector: 'pm-register', // Component's HTML tag
  standalone: true,       // Standalone component
  imports: [
    CommonModule,         // Angular's common functionalities
    MatInputModule,       // Material input fields
    MatSelectModule,      // Material select dropdowns
    ReactiveFormsModule,   // Reactive forms
    MatCheckboxModule,    // Material checkboxes
    MatButtonModule,      // Material buttons
    MatCardModule         // Material card layout
  ],
  templateUrl: './register.component.html', // HTML template path
  styleUrls: ['./register.component.scss']   // SCSS stylesheet path
})
export class RegisterComponent {
  router = inject(Router); // Injecting Router for navigation
  registerForm: FormGroup;  // FormGroup for registration form

  constructor(
    private formBuilder: FormBuilder,                   // FormBuilder for form creation
    private userControllerService: UserControllerService // UserControllerService for API interaction
  ) {
    // Initialize registration form with controls and validation
    this.registerForm = this.formBuilder.group({
      salutation: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.pattern('[0-9]+')],
      mobilePhone: ['', Validators.pattern('[0-9]+')],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Handles registration form submission
  register() {
    if (this.registerForm.valid) {
      // Perform registration if form is valid
      this.userControllerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // Display success message with SweetAlert2
          Swal.fire({
            title: 'Registration successful',
            text: 'You can log in now :)',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              // Navigate to login page on confirmation
              this.router.navigate(['/login']);
            }
          });
        },
        error: (error) => {
          // Display error message with SweetAlert2
          Swal.fire({
            title: 'Registration failed',
            text: error.error.message || 'An unexpected error has occurred :/',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
    } else {
      // Display info message for invalid form
      Swal.fire({
        title: 'Invalid Form',
        text: 'Please complete the form correctly',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  }
}
