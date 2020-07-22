import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './../clases/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // clienteForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  clienteForm = this.fb.group({
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    edad : [''],
    materia : [''],
    cursada : ['']
  });

  subir(){
    let clienteTemp : Cliente = this.clienteForm.value;
    this.router.navigate(['listado-component', clienteTemp]);
    debugger;
  };


}
