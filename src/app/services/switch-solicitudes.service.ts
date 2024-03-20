import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchSolicitudesService {

  constructor() { }

  $Solicitudes = new EventEmitter<any>();
}
