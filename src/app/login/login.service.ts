import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import { auth } from "./firebase"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    // console.log(dotenv)
  }

  // print() {
  //   console.log(process.env);
  // }

  login(login: string, password: string) {
    // auth.
    // return this.http.post("", {login, password});
  }
}
