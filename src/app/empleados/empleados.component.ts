import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  empleados: any[] = [];
  empleadoForm: FormGroup;
  empleadoEditForm: FormGroup;
  editMode: boolean = false;
  cargos: any[] = [];
  tiposDocumento: string[] = ['Cédula', 'Cédula de Extranjería', 'Pasaporte', 'Tarjeta de Identidad'];
  estados: string[] = ['Activo', 'Inactivo'];
  tiposContrato: string[] = ['Laboral', 'Prestación de Servicios'];

  constructor (private empleadoService: EmpleadoService,
    private fb: FormBuilder) {
      this.empleadoForm = this.fb.group({
        documento: [null, Validators.required],
        tipoDocumento: [null, Validators.required],
        nombre: [null, Validators.required],
        apellido: [null, Validators.required],
        telefono: [null, Validators.required],
        direccion: [null, Validators.required],
        fechaIngreso: [null, Validators.required],
        fechaRetiro: [null],
        tipoContrato: [null, Validators.required],
        estado: [null, Validators.required],
        supervisor: [null],
        cargo: [null, Validators.required]
      });

      this.empleadoEditForm = this.fb.group({
        id : [null, Validators.required],
        documento: [null, Validators.required],
        tipoDocumento: [null, Validators.required],
        nombre: [null, Validators.required],
        apellido: [null, Validators.required],
        telefono: [null, Validators.required],
        direccion: [null, Validators.required],
        fechaIngreso: [null, Validators.required],
        fechaRetiro: [null],
        tipoContrato: [null, Validators.required],
        estado: [null, Validators.required],
        supervisor: [null],
        cargo: [null, Validators.required]
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
    console.log(this.empleadoForm.value);
    const formValues = this.empleadoForm.value;
    formValues.cargo = Number(formValues.cargo);
    this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe(
      data => {
        this.empleados.push(data);
        alert('Empleado creado con éxito');
        this.empleadoForm.reset();
      },
      error => {
        console.error(error);
        alert('Hubo un error al crear el empleado');
      }
    );
  }

  updateEmpleado(): void {
    this.empleadoService.updateEmpleado(this.empleadoEditForm.value).subscribe(
      data => {
        const index = this.empleados.findIndex(e => e.id === this.empleadoEditForm.value.id);
        this.empleados[index] = this.empleadoEditForm.value;
        alert('Empleado actualizado con éxito');
      },
      error => alert(error),
    );
  }

  getCargos(): void{
    this.empleadoService.getCargos().subscribe(
      data => this.cargos = data,
      error => console.error(error)
    );
  }

  editModeActivate(){
    this.editMode = true;
    this.empleadoService.getEmpleado(this.empleadoEditForm.value.id).subscribe(
      data =>{
        this.empleadoEditForm.setValue({
          id: data.id,
          documento: data.documento,
          tipoDocumento: data.tipoDocumento,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          direccion: data.direccion,
          fechaIngreso: new Date(data.fechaIngreso).toISOString().substring(0, 10),
          fechaRetiro: data.fechaRetiro ? new Date(data.fechaRetiro).toISOString().substring(0, 10) : null,
          tipoContrato: data.tipoContrato,
          estado: data.estado,
          supervisor: data.supervisor,
          cargo: data.cargo.id
        });
        alert('Empleado cargado con éxito')
      },
      error => {
        console.error(error);
        alert('Hubo un error al cargar el empleado');
      }
    );
  }

  editModeDeactivate(){
    this.updateEmpleado();
    this.editMode = false;
  }
  
}
