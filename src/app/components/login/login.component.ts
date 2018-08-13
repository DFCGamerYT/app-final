import { Component, OnInit } from '@angular/core';

import { LoginService } from './server/login.service';

import { User } from './model/user';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensaje: string;
  public formLogin: FormGroup;
  constructor(
    private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { 
    this.formLogin = _formBuilder.group({
      nickname: [
        '',
        [Validators.required]
      ],
      password:[
        '',
        [Validators.required]
      ]
    })
  }

  ngOnInit() {
  }

  getLogin(user: User){
    const autenticado = this._loginService.autentidar(user);
    if(autenticado){
      this._router.navigate(['home']);
    }
    else
    {
      this.mensaje = "Usuario o Contraseña Erroneo";
    }
  }
}
