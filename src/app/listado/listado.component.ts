import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../clases/cliente';
import { ClienteComponent } from './../cliente/cliente.component';
import { ServicioService } from '../servicios/servicio.service';
import { RutinaComponent } from '../rutina/rutina.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string [] = [ 'nombre' , 'apellido' , 'telefono' , 'direccion', 'nacimiento','editar', 'agregar'];
  dataSource : any[] = [];

  param : any;
  parm : any;

  constructor(private route: ActivatedRoute, private router : Router, private servicioService : ServicioService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.servicioService.getClientes().subscribe((clientes)=>{
      debugger;
      this.dataSource = clientes;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length){
        this.recibirCliente(this.param);
      }
    });
  }

  recibirCliente(cliente : ClienteComponent){
    debugger;
    this.dataSource.push(cliente);
  }

  editar(cliente) {	
    let clienteTemp : Cliente = {
      nombre : cliente.nombre,
      apellido : cliente.apellido,
      telefono : cliente.telefono,
      direccion : cliente.direccion,
      nacimiento : cliente.nacimiento
    }

    this.router.navigate(['/cliente-component', cliente]);
    debugger;	
  }

  agregar(rutina) {
    this.router.navigate(['/rutina-component', rutina]);
    debugger;	
  }

}
