import { Component } from '@angular/core';
import { SwitchEmpleadosService } from './services/switch-empleados.service';
import { SwitchSolicitudesService } from './services/switch-solicitudes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semillero-angular';

  modalEmpleados: boolean = false;
  modalSolcitudes: boolean = false;

  constructor (private modalSwitchEmpleados: SwitchEmpleadosService, private modalSwitchSolicitudes: SwitchSolicitudesService){}

  ngOnInit(){
    this.modalSwitchEmpleados.$Empleados.subscribe((data)=>{this.modalEmpleados=data});
    this.modalSwitchSolicitudes.$Solicitudes.subscribe((data)=>{this.modalSolcitudes=data});
  }

}
