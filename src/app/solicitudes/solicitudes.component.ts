import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../services/solicitudes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudesVacaciones: any[] = []
  formSolicitud: FormGroup;
  formBusquedaSolicitud: FormGroup;

  constructor (private solicitudesService: SolicitudesService, private fb: FormBuilder) {
    this.formSolicitud = this.fb.group({
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required],
      estado: ['Pendiente'],
      idEmpleado: [null, Validators.required],
      observaciones: [null],
      fechaCreacion: [new Date().toISOString().substring(0, 10)],
      diasSolicitados: [null],
      fechaRetorno: [null]
    });

    this.formBusquedaSolicitud = this.fb.group({
      idEmpleado: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe(
      data => this.solicitudesVacaciones = data,
      error => alert("No se encontraron solicitudes de vacaciones")
    )
  }

  getSolicitudesByEmpleado(): void {
    this.solicitudesService.getSolicitudesById(this.formBusquedaSolicitud.value.idEmpleado).subscribe(
      data => this.solicitudesVacaciones = data,
      error => alert("No se encontraron solicitudes para el empleado seleccionado")
    )
  }

  createSolicitud(): void {
    const businessDays = this.calculateBusinessDays(this.formSolicitud.value.fechaInicio, this.formSolicitud.value.fechaFin);
    this.formSolicitud.patchValue({ diasSolicitados: businessDays });
    this.formSolicitud.patchValue({ fechaRetorno: this.getNextBusinessDay(new Date(this.formSolicitud.value.fechaFin)).toISOString().substring(0, 10) });
    console.log(this.formSolicitud.value);
    this.solicitudesService.createSolicitud(this.formSolicitud.value).subscribe(
      data => {
        this.formSolicitud.reset();
        this.getSolicitudes();
        alert('Solicitud creada con éxito');
      },
      error => alert("Ha ocurrido un error creando la solicitud recuerde que para solicitar vacaciones debe tener por lo menos 60 dias en la empresa, tener contrato laboral y la fecha de inicio debe ser con 15 dias de anticipacion")
    )
  }

  calculateBusinessDays(startDate: Date, endDate: Date): number {
    let count = 0;
    const start = new Date(startDate).setHours(0, 0, 0, 0);
    const end = new Date(endDate).setHours(0, 0, 0, 0);
  
    for (let d = new Date(start); d.getTime() <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        count++;
      }
    }
    return count;
  }

  getNextBusinessDay(date: Date): Date {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    if (nextDay.getDay() === 5) {
      nextDay.setDate(nextDay.getDate() + 2);
    } else if (nextDay.getDay() === 0) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return nextDay;
  }
} 
