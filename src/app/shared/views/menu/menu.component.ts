import { Component } from '@angular/core';
import { menu } from '@shared/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  ez: string = '../../../../assets/ez.png';

  status: boolean = false;
  mostrar() {
    this.status = !this.status;
  }

  menuData: menu[] = [
    {
      routeActive: 'main-menu__active1',
      classHover: 'main-menu__hover1',
      classIcon: 'icon ion-ios-home',
      text: 'posts',
      route: './core/homeposts/'
    },
    {
      routeActive: 'main-menu__active2',
      classHover: 'main-menu__hover2',
      classIcon: 'icon ion-ios-person',
      text: 'about',
      route: './core/about'
    },
    // {
    //   routeActive: 'main-menu__active1',
    //   classHover : 'main-menu__hover1',
    //   classIcon  : 'icon ion-ios-call',
    //   text       : 'contacto',
    //   route      : './core/contacto'
    // },
  ];

  scrollTop() {
    const header = document.querySelector('.main');
    header?.scrollIntoView({ behavior: 'smooth' });
  }
}
