import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  empleados: any[] = [];
  empleadoForm: FormGroup;
  cargos: any[] = [];

  constructor (private empleadoService: EmpleadoService,
    private fb: FormBuilder) {
      this.empleadoForm = this.fb.group({
        documento: [''],
        tipoDocumento: [''],
        nombre: [''],
        apellido: [''],
        telefono: [''],
        direccion: [''],
        fechaIngreso: [''],
        fechaRetiro: [''],
        tipoContrato: [''],
        estado: [''],
        supervisor: [''],
        cargo: ['']
      });
    }

  ngOnInit() {
    this.getEmpleados();
    this.getCargos();
  }
  
  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => this.empleados = data,
      error => console.error(error)
    );
  }

  createEmpleado(): void {
    this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe(
      data => this.empleados.push(data),
      error => console.error(error)
    );
  }

  updateEmpleado(empleado: any): void {
    this.empleadoService.updateEmpleado(empleado).subscribe(
      data => {
        const index = this.empleados.findIndex(e => e.id === empleado.id);
        this.empleados[index] = empleado;
      },
      error => console.error(error),
    );
  }

  getCargos(): void{
    this.empleadoService.getCargos().subscribe(
      data => this.cargos = data,
      error => console.error(error)
    );
  }
  
}
