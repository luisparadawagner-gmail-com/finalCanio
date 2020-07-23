import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-rutinas',
  templateUrl: './listado-rutinas.component.html',
  styleUrls: ['./listado-rutinas.component.css']
})
export class ListadoRutinasComponent implements OnInit {

  displayedColumns: string [] = [ 'nombre' , 'apellido' , 'rutinaName', 'repeticiones','peso'];
  dataSource : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
