import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Rutina } from './../clases/rutina';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  rutinaForm : FormGroup;
  parm: any;
  rutina : any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    debugger;		
    this.parm = this.route.snapshot.params;

    if (Object.keys(this.parm).length) {
      this.rutina = this.parm;
    } 

    this.initForm(this.rutina);
  }


  nombreControl = new FormControl('Rutina');

  initForm(modificar : Rutina){
    this.rutinaForm = this.fb.group({
        rutinaName : ['', Validators.required],
        repeticiones : ['', Validators.required],
        peso : ['', Validators.required]
      });
    }

  subir(){
    let rutinaTemp : Rutina = this.rutinaForm.value;
    this.router.navigate(['listado-component', rutinaTemp]);
    debugger;
  };

}
