import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LoginService} from "../../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) this.router.navigate(['main']);
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  signIn() {
    console.log(this.emailFormControl.value, this.passwordFormControl.value);
    if (!this.emailFormControl.value || !this.passwordFormControl.value) return;
    this.login.login(this.emailFormControl.value, this.passwordFormControl.value).then(d => {
      localStorage.setItem('accessToken', d.user.accessToken);
      this.router.navigate(['main']);
    })
  }
}
