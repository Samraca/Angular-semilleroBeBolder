import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  empleados: any[] = [];

  constructor (/*private empleadoService: EmpleadoService*/) {}

  ngOnInit() {
    //this.getEmpleados();
  }

  /*
  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => this.empleados = data,
      error => console.error(error)
    );
  }

  createEmpleado(empleado: any): void {
    this.empleadoService.createEmpleado(empleado).subscribe(
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
      error => console.error(error)
    );
  }
  */
}
