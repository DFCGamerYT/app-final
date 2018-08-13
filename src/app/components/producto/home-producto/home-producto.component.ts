import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../server/producto.service';
import { Producto } from './../model/producto';

@Component({
  selector: 'app-home-producto',
  templateUrl: './home-producto.component.html',
  styleUrls: ['./home-producto.component.css']
})
export class HomeProductoComponent implements OnInit {

  productos: Array<Producto>;

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
    this._productoService.getProductoList().subscribe(
      this.setProductos.bind(this),
      this.setErrors.bind(this)
    )
  }

  setProductos(data: Array<Producto>){
    this.productos = data;
  }

  setErrors(data: any){
    console.log(data);
  }

  deleteProductoP(id: number){
    this.productos[id].estado = 2; 
    this._productoService.deleteProductoEstado(this.productos[id].id, this.productos[id]).subscribe(
      this.setErrors.bind(this)
    );
  }

  deleteProductD(id: number){
    this._productoService.deleteProducto(id).subscribe(
      this.setErrors.bind(this)
    );
  }
}
