import { Component, inject } from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { UserControllerService } from "../../../openapi-client"; // Pfad anpassen

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  router = inject(Router);
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userControllerService: UserControllerService // Service hinzugefügt
  ) {
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

  register() {
    if (this.registerForm.valid!) {
      this.userControllerService.register(this.registerForm.value!).subscribe({
        next: (response) => {
          // Hier können Sie nach erfolgreicher Registrierung navigieren
          this.router.navigate(['/login']);
          console.log('Registration successful', response);
        },
        error: (error) => {
          // Fehlerbehandlung
          console.error('Registration failed', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
}
