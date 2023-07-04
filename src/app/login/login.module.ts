import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from "./components/form/form.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  exports: [],
  providers: [],
})
export class LoginModule { }
