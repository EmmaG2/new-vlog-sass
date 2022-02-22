import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BackgroundComponent } from './background/background.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    BackgroundComponent,
    ErrorComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [MenuComponent, BackgroundComponent, FooterComponent],
})
export class SharedModule {}
