import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import { ChampionshipListComponent } from './components/championship-list/championship-list.component';
import { ChampionshipCreateComponent } from './components/championship-create/championship-create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChampionshipListComponent, ChampionshipCreateComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">inicial</a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
