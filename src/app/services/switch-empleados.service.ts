import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchEmpleadosService {

  constructor() { }
  $Empleados = new EventEmitter<any>();
}
