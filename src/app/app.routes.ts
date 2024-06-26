import { Routes } from '@angular/router';
import { ChampionshipListComponent } from './components/championship-list/championship-list.component';
import { ChampionshipCreateComponent } from './components/championship-create/championship-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/campeonatos', pathMatch: 'full' },
  { path: 'campeonatos', component: ChampionshipListComponent },
  { path: 'campeonatos/criar', component: ChampionshipCreateComponent },
];
