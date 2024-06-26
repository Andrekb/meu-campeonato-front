import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../services/championship.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.scss'],
  standalone: true,
  imports: [CommonModule]  // Importar CommonModule
})
export class ChampionshipListComponent implements OnInit {
  championships: any[] = [];

  constructor(private championshipService: ChampionshipService) { }

  ngOnInit(): void {
    this.loadChampionships();
  }

  loadChampionships(): void {
    this.championshipService.getChampionships().subscribe((data: any) => {
      this.championships = data;
    });
  }
}
