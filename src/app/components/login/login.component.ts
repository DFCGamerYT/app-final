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
    this.mensaje = localStorage.getItem('error');
    localStorage.removeItem('nickname');
  }

  getLogin(user: User){    
    localStorage.setItem('nickname',user.nickname);
    this._loginService.autentidar(user).subscribe(
      this.error.bind(this),
      this.validar.bind(this)
    )
  }

  validar(data: any){
    console.log('validar')
    if(data.status == 200){
      localStorage.removeItem('error');
      this._router.navigate(['/home'])
    }
    else{
      this.mensaje = 'Usuario o Contrase;a Incorrectos'
    }
  }
  error(data: any){
    console.log('error')
    console.log(data)
  }
}
