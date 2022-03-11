import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@views/about/about.component';
import { ContactoComponent } from '@views/contacto/contacto.component';
import { HomeComponent } from '@views/home/home.component';
import { AtencionClienteComponent } from '@views/trabajos/atencion-cliente/atencion-cliente.component';
import { AtributosAtencionClienteComponent } from '@views/trabajos/atributos-atencion-cliente/atributos-atencion-cliente.component';
import { ConceptosSpteTecnicoComponent } from '@views/trabajos/conceptos-spte-tecnico/conceptos-spte-tecnico.component';
import { HelpDeskComponent } from '@views/trabajos/help-desk/help-desk.component';
import { NivelesSpteComponent } from '@views/trabajos/niveles-spte/niveles-spte.component';
import { SupportTypesComponent } from '@views/trabajos/support-types/support-types.component';
import { TiposClientesComponent } from './views/trabajos/tipos-clientes/tipos-clientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'homeposts', component: HomeComponent },
      {
        path: 'posts',
        children: [
          {
            path: 'niveles-de-soporte',
            component: NivelesSpteComponent
          },
          {
            path: 'tipos-de-soporte',
            component: SupportTypesComponent
          },
          {
            path: 'atributos-atencion-al-cliente',
            component: AtributosAtencionClienteComponent
          },
          {
            path: 'help-desk',
            component: HelpDeskComponent
          },
          {
            path: 'conceptos-soporte-tecnito',
            component: ConceptosSpteTecnicoComponent
          },
          {
            path: 'atencion-al-cliente',
            component: AtencionClienteComponent
          },
          {
            path: 'tipos-clientes',
            component: TiposClientesComponent
          },
          {
            path: '**',
            redirectTo: 'mapamental'
          }
        ],
      },
      { path: 'contacto', component: ContactoComponent, },
      { path: 'about', component: AboutComponent, },
      { path: '**', redirectTo: 'homeposts', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
