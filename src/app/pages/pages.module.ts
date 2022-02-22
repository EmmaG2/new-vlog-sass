import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { AboutComponent } from '@pages/about/about.component';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { HomeComponent } from '@pages/home/home.component';

@NgModule({
  declarations: [ContactoComponent, AboutComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
