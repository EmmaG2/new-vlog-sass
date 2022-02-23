import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BackgroundComponent } from '@views/background/background.component';
import { ErrorComponent } from '@views/error/error.component';
import { FooterComponent } from '@views/footer/footer.component';
import { MenuComponent } from '@views/menu/menu.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    ErrorComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, BackgroundComponent, FooterComponent],
})
export class SharedModule {}
