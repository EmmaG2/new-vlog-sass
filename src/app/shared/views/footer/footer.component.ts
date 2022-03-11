import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  scrollTop() {
    const header = document.querySelector('.main');
    header?.scrollIntoView({behavior: 'smooth'});
  }

}
