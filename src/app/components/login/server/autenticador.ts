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
      if (autenticado === 'david') {
        return true;
      } else {
        this._router.navigate(['/login'], {
          queryParams: {
            return: 'LogIn Required'
          }
        });
        return false;
      }
    }
}