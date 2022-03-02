import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from '@views/about/about.component';
import { AtencionClienteComponent } from './views/trabajos/atencion-cliente/atencion-cliente.component';
import { AtributosAtencionClienteComponent } from './views/trabajos/atributos-atencion-cliente/atributos-atencion-cliente.component';
import { ConceptosSpteTecnicoComponent } from './views/trabajos/conceptos-spte-tecnico/conceptos-spte-tecnico.component';
import { ContactoComponent } from '@views/contacto/contacto.component';
import { HelpDeskComponent } from '@views/trabajos/help-desk/help-desk.component';
import { HomeComponent } from '@views/home/home.component';
import { NivelesSpteComponent } from '@views/trabajos/niveles-spte/niveles-spte.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SupportTypesComponent } from '@views/trabajos/support-types/support-types.component';
import { TiposClientesComponent } from '@views/trabajos/tipos-clientes/tipos-clientes.component';

@NgModule({
  declarations: [
    ContactoComponent,
    AboutComponent,
    HomeComponent,
    NivelesSpteComponent, //!
    SupportTypesComponent, //!
    AtributosAtencionClienteComponent, //!
    HelpDeskComponent, //!
    ConceptosSpteTecnicoComponent,//!
    AtencionClienteComponent, //!
    TiposClientesComponent //!
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
})
export class PagesModule {}
