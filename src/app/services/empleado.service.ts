import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:8080/empleados';

  constructor(private http: HttpClient) { }
  
  getEmpleados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  getEmpleado(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getById?id=${id}`);
  }

  createEmpleado(empleado: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/create`, empleado);
  }

  updateEmpleado(empleado: Object): Observable<Object> {
    return this.http.put(`${this.apiUrl}/update`, empleado);
  }

  getCargos(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/cargos/getAll");
  }
  
}
