import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'http://localhost:8080/solicitudes';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  getSolicitudesById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getByEmpleadoId?id=${id}`);
  }

  createSolicitud(solicitud: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/create`, solicitud);
  }
}
