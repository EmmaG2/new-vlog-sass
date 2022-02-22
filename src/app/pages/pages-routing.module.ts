import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'posts',
        component: HomeComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '**',
        redirectTo: 'posts',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
