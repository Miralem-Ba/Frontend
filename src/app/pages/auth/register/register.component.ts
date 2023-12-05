import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatCheckboxModule, MatButtonModule, MatCardModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [
    CommonModule, MatInputModule, MatSelectModule,
    ReactiveFormsModule, MatCheckboxModule, MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
    if (this.registerForm.valid) {
      console.log('Registration data:', this.registerForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
