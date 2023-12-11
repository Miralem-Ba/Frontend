import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

/**
 * LoginComponent - handles user login process.
 */
@Component({
  selector: 'pm-login',  // The selector to use this component in HTML
  standalone: true,     // Enables standalone component usage without an NgModule
  imports: [
    CommonModule,       // Provides Angular directives like ngIf and ngFor
    FormsModule,        // Supports template-driven forms
    MatInputModule,     // Angular Material module for input fields
    ReactiveFormsModule, // Supports reactive form approach
    MatButtonModule,    // Angular Material module for buttons
    RouterLink          // Directive for linking routes in templates
  ],
  templateUrl: './login.component.html', // Link to the component's HTML template
  styleUrl: './login.component.scss'    // Link to the component's stylesheet
})
export class LoginComponent {
  // FormGroup to manage login form data and validation
  fromGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/), Validators.required]),
    password: new FormControl()
  });

  /**
   * Handle form submission.
   * Logs the form data and performs login if the form is valid.
   */
  submit() {
    console.log(this.fromGroup);
    if (this.fromGroup.valid) {
      // Perform login operations here
    }
  }
}
