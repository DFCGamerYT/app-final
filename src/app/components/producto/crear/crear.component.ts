import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Producto } from '../model/producto';
import { ProductoService } from '../server/producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public crearForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _productoService: ProductoService,
    private _router: Router
  ) { 
    this.crearForm = _formBuilder.group({
      nombre: [
        '',
        [
          Validators.required
        ]
      ],
      precio:[
        0,
        [Validators.required]
      ],
      cantidad: [
        0,
        [Validators.required]
      ]
    })
  }

  ngOnInit() {
  }

  crearProducto(producto: Producto){
    producto.estado = 1;
    this._productoService.newProducto(producto).subscribe(
      this.navegar.bind(this),
      this.setError.bind(this)
    )
  }

  navegar(data: any){
    this._router.navigate(['home/producto']);
  }

  setError(data: any){
    console.log(data);
  }
}
