import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterLink } from "@angular/router";
import { UserControllerService } from "../../../openapi-client";
import Swal from 'sweetalert2';
import {MatCardModule} from "@angular/material/card";  // Importieren von SweetAlert2

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  loginErrorMessage: string | null = null;

  constructor(
    private userControllerService: UserControllerService,
    private router: Router
  ) {}

  submit(): void {
    if (this.formGroup.valid) {
      this.userControllerService.login({
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }).subscribe({
        next: (response) => {
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
          Swal.fire({
            title: 'Login failed',
            text: 'Please check your login information',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Invalid form',
        text: 'Please fill in all required fields correctly',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
