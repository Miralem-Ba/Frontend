import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

/**
 * RegisterComponent - handles user registration.
 */
@Component({
  selector: 'pm-register', // Component selector used in templates
  standalone: true, // Enables standalone component usage
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './register.component.html', // Link to the component's HTML template
  styleUrls: ['./register.component.scss'] // Link to the component's stylesheet
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; // Form group to handle registration form

  /**
   * Constructor - set up the registration form
   * @param formBuilder - FormBuilder to create the form group
   */
  constructor(private formBuilder: FormBuilder) {
    // Initialize form with form controls and validation rules
    this.registerForm = this.formBuilder.group({
      Salutation: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Street: ['', Validators.required],
      Zip: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      City: ['', Validators.required],
      Country: ['', Validators.required],
      Phone: ['', Validators.pattern('[0-9]+')],
      MobilePhone: ['', Validators.pattern('[0-9]+')],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    // Lifecycle hook for additional initialization
  }

  /**
   * Handles form submission.
   * Validates the form and logs the data or an error message.
   */
  register() {
    if (this.registerForm.valid) {
      console.log('Registration data:', this.registerForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
