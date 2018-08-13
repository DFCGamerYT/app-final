import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';

import { Producto } from './../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }
  
  private API_URL: string = "http://localhost:3000/producto";

  public getProductoList(): Observable<Producto[]>{
    return this._http.get<Producto[]>(this.API_URL);
  }

  public getProductoById(id: number): Observable<Producto>{
    return this._http.get<Producto>(this.API_URL + '/' + id);
  }

  public deleteProducto(id: number): Observable<any>{
    return this._http.delete(this.API_URL + '/' + id);
  }
  public deleteProductoEstado(id: number, producto: Producto): Observable<any>{
    return this._http.put(this.API_URL + '/' + id, producto);
  }

  public updateProducto(id: number, producto: Producto): Observable<any>{
    return this._http.put(this.API_URL+'/'+id, producto);
  }

  public newProducto(producto: Producto): Observable<any>{
    return this._http.post(this.API_URL,producto);
  }

}
