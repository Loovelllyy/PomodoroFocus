import { Injectable } from '@angular/core';
import { fbLogin } from "./firebase"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }


  login(login: string, password: string) {
    return fbLogin(login, password)
  }
}
