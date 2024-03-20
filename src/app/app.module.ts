import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NavbarComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
