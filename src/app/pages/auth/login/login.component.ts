import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {UserControllerService} from "../../../openapi-client";
import {MatCardModule} from "@angular/material/card";


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
    RouterLink,
    MatCardModule,
    // Directive for linking routes in templates
  ],
  templateUrl: './login.component.html', // Link to the component's HTML template
  styleUrl: './login.component.scss'    // Link to the component's stylesheet
})
export class LoginComponent {
  fromGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  loginErrorMessage: string | null = null;

  constructor(
    private userControllerService: UserControllerService,
    private router: Router
  ) {}

  submit(): void {
    if (this.fromGroup.valid) {
      this.userControllerService.login({
        email: this.fromGroup.value.email,
        password: this.fromGroup.value.password
      }).subscribe({
        next: (response) => {
          // Hier Logik nach erfolgreichem Login
          this.router.navigate(['/products/list']).then(()=>{
            localStorage.setItem("ACCESS_TOKEN",response.token)
          })

        },
        error: (error) => {
          this.loginErrorMessage = "Login fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldeinformationen.";
        }
      });
    }
  }
}
