import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/model/producto';
import { ProductoService } from './../producto/server/producto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private productos:Array<Producto>;
  //PIE
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {   
    this._productoService.getProductoList().subscribe(
      // this.setPrueba.bind(this),
      // this.setError.bind(this),
      // this.setCompleta.call(this)
      data => {
        console.log(data);
      }
    )

    console.log('2' + this.productos)
  }

  setPrueba(data: Array<Producto>){
    this.productos = data
    console.log(this.productos)
  }

  setError(data: any){
    console.log(data);
  }

  setCompleta(data: Array<Producto>){
    console.log(data);
    console.log(this.productos)
    var longitud:number = this.pieChartLabels.length;
    this.pieChartLabels.splice(longitud,0,'Prueba');
    this.pieChartData.splice(longitud,0,900)
    console.log(longitud);
  }
}
