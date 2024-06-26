import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChampionshipService } from '../../services/championship.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-championship-create',
  templateUrl: './championship-create.component.html',
  styleUrls: ['./championship-create.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ChampionshipCreateComponent implements OnInit {
  championshipForm!: FormGroup;
  teams: any[] = [];
  selectedTeams: any[] = new Array(8).fill(null);

  constructor(
    private fb: FormBuilder,
    private championshipService: ChampionshipService
  ) { }

  ngOnInit(): void {
    this.championshipForm = this.fb.group({
      name: ['', Validators.required],
      teams: this.fb.array(new Array(8).fill('').map(() => this.fb.control('', Validators.required)))
    });

    this.championshipService.getTeams().subscribe((data: any) => {
      this.teams = data;
    });
  }

  selectTeam(team: any): void {
    const emptySlotIndex = this.selectedTeams.findIndex(slot => slot === null);
    if (emptySlotIndex !== -1) {
      this.selectedTeams[emptySlotIndex] = team;
      this.teams = this.teams.filter(t => t !== team); // Remove o time selecionado da lista de times disponíveis
      this.championshipForm.get('teams')?.patchValue(this.selectedTeams.map(t => t ? t.id : ''));
    }
  }

  onSubmit(): void {
    if (this.championshipForm.valid) {
      this.championshipService.createChampionship(this.championshipForm.value).subscribe(response => {
        console.log('Championship created:', response);
        this.championshipForm.reset();
        this.selectedTeams = new Array(8).fill(null);
        this.championshipService.getTeams().subscribe((data: any) => {
          this.teams = data;
        });
      });
    }
  }
}
