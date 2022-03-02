import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadroSinopticoComponent } from './cuadro-sinoptico/cuadro-sinoptico.component';
import { AtributosAtencionClienteComponent } from './atributos-atencion-cliente/atributos-atencion-cliente.component';
import { BuenServicioComponent } from './buen-servicio/buen-servicio.component';
import { TiposCLienteComponent } from './tipos-cliente/tipos-cliente.component';
import { TrabajosRoutingModule } from './trabajos-routing.module';



@NgModule({
  declarations: [
    CuadroSinopticoComponent,
    AtributosAtencionClienteComponent,
    BuenServicioComponent,
    TiposCLienteComponent
  ],
  imports: [
    CommonModule,
    TrabajosRoutingModule
  ]
})
export class TrabajosModule { }
