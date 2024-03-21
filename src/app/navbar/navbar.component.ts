import { Component } from '@angular/core';
import { SwitchEmpleadosService } from '../services/switch-empleados.service';
import { SwitchSolicitudesService } from '../services/switch-solicitudes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor (private modalSwitchEmpleado : SwitchEmpleadosService, private modalSwitchSolicitudes: SwitchSolicitudesService){}

  ngOnInit(){
    this.modalSwitchEmpleado.$Empleados.emit(true);
  }

  public Empleados(){
    this.modalSwitchEmpleado.$Empleados.emit(true);
    this.modalSwitchSolicitudes.$Solicitudes.emit(false);
  }

  public Solicitudes(){
    this.modalSwitchSolicitudes.$Solicitudes.emit(true);
    this.modalSwitchEmpleado.$Empleados.emit(false);
  }
}
