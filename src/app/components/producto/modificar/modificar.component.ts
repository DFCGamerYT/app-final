import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProductoService } from './../server/producto.service';
import { Producto } from '../model/producto';

import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  private id: any;

  public formUpdate: FormGroup;

  producto: Producto = new Producto();

  constructor(
    private _router: Router, 
    private _activatedRoute: ActivatedRoute, 
    private _productoService: ProductoService,
    private _formBuilder: FormBuilder
  ) { 
    this.formUpdate = _formBuilder.group({
      nombre: [this.producto.nombre],
      precio: [this.producto.precio],
      cantidad: [this.producto.cantidad]
    });
  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._productoService.getProductoById(this.id).subscribe(
      this.setProducto.bind(this),
      this.setError.bind(this)
    )
  }

  setProducto(data: Producto){
    this.producto = data;
    console.log(this.producto);
    this.formUpdate.get('nombre').setValue(this.producto.nombre);
    this.formUpdate.get('precio').setValue(this.producto.precio);
    this.formUpdate.get('cantidad').setValue(this.producto.cantidad);

  }

  setError(data: any){
    console.log(data);
  }

  modificarProducto(data: Producto){
    data.estado = 1;
    this._productoService.updateProducto(this.id,data).subscribe(
      this.navegar.bind(this),
      this.setError.bind(this)
    )
  }

  navegar(){
    this._router.navigate(['home/producto']);
  }
}
