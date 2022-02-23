import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '@views/contacto/contacto.component';
import { AboutComponent } from '@views/about/about.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from '@views/home/home.component';

@NgModule({
  declarations: [ContactoComponent, AboutComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
