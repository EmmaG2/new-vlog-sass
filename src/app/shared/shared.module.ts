import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@shared/menu/menu.component';
import { BackgroundComponent } from '@shared/background/background.component';
import { ErrorComponent } from '@shared/error/error.component';
import { FooterComponent } from '@shared/footer/footer.component';

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
