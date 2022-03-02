import { Component } from '@angular/core';
import { Posts } from '@core/interfaces/posts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardsPosts: Posts[] = [
    {
      title: 'Help Desk',
      text: 'lorem ipsum dolor el pepe ete sech',
      url: '/core/posts/help-desk',
      bg: 'background: url(../../../../assets/bg-cards/card1.jpg)'
    },
    {
      title: 'Niveles de Soporte',
      text: 'lorem ipsum dolor el pepe ete sech',
      url: '/core/posts/niveles-de-soporte',
      bg: 'background: url(../../../../assets/bg-cards/card2.jpg)'
    },
    {
      title: 'Tipos de Soporte',
      text: 'lorem ipsum dolor el pepe ete sech',
      url: '/core/posts/tipos-de-soporte',
      bg: 'background: url(../../../../assets/bg-cards/card3.jpg)'
    },
    {
      title: 'Atributos de Atención al Cliente',
      bg: 'background: url(../../../../assets/bg-cards/card3.jpg)',
      text: 'lorem ipsum dolor',
      url: '/core/posts/atributos-atencion-al-cliente'
    },
    {
      title: 'Conceptos Básicos de Soporte Técnico',
      bg: 'background: url(../../../../assets/bg-cards/card3.jpg)',
      text: 'lorem ipsum dolor',
      url: '/core/posts/conceptos-soporte-tecnito'
    },
    {
      title: 'Atención al Cliente y Experiencia',
      bg: 'background: url(../../../../assets/bg-cards/card3.jpg)',
      text: 'lorem ipsum dolor',
      url: '/core/posts/atencion-al-cliente'
    },
    {
      title: 'Tipos de Clientes',
      bg: 'background: url(../../../../assets/bg-cards/card3.jpg)',
      text: 'lorem ipsum dolor luih',
      url: '/core/posts/tipos-clientes'
    }
  ];

}
