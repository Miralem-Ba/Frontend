import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fromGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  submit() {
    console.log(this.fromGroup);
    if(this.fromGroup.valid){
      //
    }
  }
}
