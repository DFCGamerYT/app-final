import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeProductoComponent } from './home-producto/home-producto.component';
import { ModificarComponent } from './modificar/modificar.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {path: '', component: HomeProductoComponent},
  {path: ':id/modificar', component: ModificarComponent},
  {path: 'crear', component: CrearComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
