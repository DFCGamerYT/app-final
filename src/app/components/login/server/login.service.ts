import { Injectable } from '@angular/core';

import { User } from './../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public autentidar(user: User): boolean{
    if (user.nickname == "david" && user.password == "3328") {
      localStorage.setItem('nickname', user.nickname);
      return true
    } else {
      return false
    }
  }
}
