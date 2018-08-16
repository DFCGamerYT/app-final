import { CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class Autenticador implements CanActivate{
    constructor (
        private _router: Router
    ){}

    canActivate() {
      const autenticado = localStorage.getItem('nickname');
      console.log(autenticado);
      if (autenticado != null) {
        return true;
      } else {
        this._router.navigate(['/login'], {
          queryParams: {
            return: 'LogIn Required'
          }
        });
        localStorage.setItem('error','LogIn Required');
        return false;
      }
    }
}