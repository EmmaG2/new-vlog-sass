import { Component } from '@angular/core';
import { menu } from '@shared/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  status: boolean = false;
  mostrar() {
    this.status = !this.status;
  }

  menuData: menu[] = [
    {
      routeActive: 'main-menu__active1',
      classHover : 'main-menu__hover1',
      classIcon  : 'icon ion-ios-home',
      text       : 'posts',
      route      : './home/posts'
    },
    {
      routeActive: 'main-menu__active2',
      classHover : 'main-menu__hover2',
      classIcon  : 'icon ion-ios-person',
      text       : 'about',
      route      : './home/about'
    },
    {
      routeActive: 'main-menu__active1',
      classHover : 'main-menu__hover1',
      classIcon  : 'icon ion-ios-call',
      text       : 'contacto',
      route      : './home/contacto'
    },
  ];


}
