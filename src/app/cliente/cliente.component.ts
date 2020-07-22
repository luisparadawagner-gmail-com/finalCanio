import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Cliente } from './../clases/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;
  cliente : any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.cliente = this.param;
    } 

    this.initForm(this.cliente);
  }

  nombreControl = new FormControl('Cliente');

  initForm(modificar : Cliente){   
    this.clienteForm = this.fb.group({
        nombre : [modificar ? modificar.nombre: '', Validators.required],
        apellido : [modificar ? modificar.apellido:'', Validators.required],
        telefono : [modificar ? modificar.telefono: ''],
        direccion : [modificar ? modificar.direccion: ''],
        nacimiento : [modificar ? modificar.nacimiento:'', Validators.required]
    });
  }

  subir(){
    let clienteTemp : Cliente = this.clienteForm.value;
    this.router.navigate(['listado-component', clienteTemp]);
    debugger;
  };


}
