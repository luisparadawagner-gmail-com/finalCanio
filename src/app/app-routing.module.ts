import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RutinaComponent } from './rutina/rutina.component';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
  { path : 'cliente-component', component: ClienteComponent},
  { path: 'rutina-component', component: RutinaComponent},
  { path: 'listado-component', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
