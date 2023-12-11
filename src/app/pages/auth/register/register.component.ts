import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'pm-register',
  standalone: true,
    imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatCheckboxModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      Salutation:['',Validators.required],
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

  }
  register() {
    if (this.registerForm.valid) {
      console.log('Registration data:', this.registerForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
