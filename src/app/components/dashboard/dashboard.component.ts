import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../producto/server/producto.service';

import { ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  chart = [];

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {   
    this._productoService.getProductoList().subscribe(
      resp => {
        var backGround = [];
        var borderColor = [];

        let titulos = resp.map(data => data.nombre);
        let cantidad = resp.map(data => data.cantidad);

        for(let titulo of titulos){
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);
          backGround.push("rgba(" + r + "," + g + "," + b + ",0.2)");
          borderColor.push("rgba(" + r + "," + g + "," + b + ",1)");
        }

        this.chart =new Chart(this.canvas.nativeElement.getContext('2d'), {
          type: 'polarArea',
          data: {
            labels: titulos,
            datasets: [{
              data: cantidad,
              backgroundColor: backGround,
              borderColor: borderColor,
              borderWidth: 2
            }]
          }
        })
      },
      this.setError.bind(this)
    )
  }

  setError(data: any){
    console.log(data);
  }

  prueba() {
    console.log('hola')
  }
}
