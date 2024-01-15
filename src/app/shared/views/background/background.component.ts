import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  ngOnInit(): void {
    const settings = new Typed('.typed', {
      strings: [
        'Ezra',
        'Integros',
        'Profesionales',
        'Entusiasmo',
        'Responsabilidad'
      ],
      smartBackspace: true,
      loop: true,
      backSpeed: 200,
      showCursor: false,
      startDelay: 100
    })
  }
}
