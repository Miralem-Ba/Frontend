import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { UserControllerService } from "../../../openapi-client"; // Ensure the path is correct
import Swal from 'sweetalert2';

// Define the RegisterComponent with necessary Angular Material components
@Component({
  selector: 'pm-register', // Component selector used in templates
  standalone: true,       // Indicate that the component is standalone
  imports: [
    CommonModule,         // Provides Angular directives like ngIf, ngFor
    MatInputModule,       // Angular Material module for input fields
    MatSelectModule,      // Angular Material module for select dropdowns
    ReactiveFormsModule,   // Supports reactive form approach
    MatCheckboxModule,    // Angular Material module for checkboxes
    MatButtonModule,      // Angular Material module for buttons
    MatCardModule         // Angular Material module for card layout
  ],
  templateUrl: './register.component.html', // Link to the HTML template of the component
  styleUrls: ['./register.component.scss']   // Link to the SCSS stylesheet of the component
})
export class RegisterComponent {
  router = inject(Router); // Injecting Router for navigation
  registerForm: FormGroup;  // FormGroup to manage registration form

  // Constructor with FormBuilder and UserControllerService injections
  constructor(
    private formBuilder: FormBuilder,                   // FormBuilder to create FormGroup
    private userControllerService: UserControllerService // Injecting UserControllerService
  ) {
    // Initialize the registration form with form controls and validation rules
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

  // Method to handle registration form submission
  register() {
    if (this.registerForm.valid) {
      // Perform registration request if the form is valid
      this.userControllerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // Display success notification using SweetAlert2
          Swal.fire({
            title: 'Registration successful',
            text: 'You can log in now :)',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              // Navigate to login page after confirmation
              this.router.navigate(['/login']);
            }
          });
          console.log('Registration successful', response);
        },
        error: (error) => {
          // Handle registration failure using SweetAlert2
          Swal.fire({
            title: 'Registration failed',
            text: error.error.message || 'An unexpected error has occurred :/',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          console.error('Registration failed', error);
        }
      });
    } else {
      // Handle invalid form submission
      Swal.fire({
        title: 'Invalid Form',
        text: 'Please complete the form correctly',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      console.error('Form is not valid');
    }
  }
}
