import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributosAtencionClienteComponent } from './atributos-atencion-cliente/atributos-atencion-cliente.component';
import { BuenServicioComponent } from './buen-servicio/buen-servicio.component';
import { CuadroSinopticoComponent } from './cuadro-sinoptico/cuadro-sinoptico.component';
import { TiposCLienteComponent } from './tipos-cliente/tipos-cliente.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'atencion-al-cliente',
                component: AtributosAtencionClienteComponent
            },
            {
                path: 'buen-servicio',
                component: BuenServicioComponent
            },
            {
                path: 'cuadro-sinoptico',
                component: CuadroSinopticoComponent
            },
            {
                path: 'tipos-cliente',
                component: TiposCLienteComponent
            },
            {
                path: '**',
                redirectTo: 'atencion-al-cliente'
            }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class TrabajosRoutingModule { }