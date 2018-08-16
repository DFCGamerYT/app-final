import { Injectable } from '@angular/core';

import { User } from './../model/user';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL: string = 'http://127.0.0.1:8080/autentication';
  private params = new HttpParams();

  constructor(private _http: HttpClient) { 
    
  }

  public autentidar(user: User): Observable<any>{
    let params = new HttpParams().set('nickname', user.nickname).set('password', user.password);
    return this._http.get<any>(this.API_URL, {params})
  }
}
