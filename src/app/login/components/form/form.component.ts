import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit(): void {

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  signIn() {
    console.log(this.emailFormControl.value, this.passwordFormControl.value);
    // console.log(this.emailFormControl.invalid, this.passwordFormControl.invalid);
    if (!this.emailFormControl.value || !this.passwordFormControl.value) return;
    // this.login.login(this.emailFormControl.value, this.passwordFormControl.value)
  }
}
