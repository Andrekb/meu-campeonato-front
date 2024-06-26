import {Injectable} from '@angular/core';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChampionshipService {
  private apiUrl = 'http://localhost:8000/api';

  getTeams(): Observable<any> {
    return from(fetch(`${this.apiUrl}/teams`).then(response => response.json()));
  }

  getChampionships(): Observable<any> {
    return from(fetch(`${this.apiUrl}/campeonatos`).then(response => response.json()));
  }

  createChampionship(data: any): Observable<any> {
    return from(
      fetch(`${this.apiUrl}/campeonatos/criar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          // Log para depuração
          console.error('Error status:', response.status);
          console.error('Error status text:', response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        // Log para depuração
        console.error('Fetch error:', error);
        throw error;
      })
    );
  }

}