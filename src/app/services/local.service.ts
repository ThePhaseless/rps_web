import { effect, Injectable, signal } from '@angular/core';
import { DefaultService, Game, Player } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(private apiService: DefaultService) {
    effect(() => {
      localStorage.setItem('player', JSON.stringify(this.currentPlayer()));
      console.log(this.currentPlayer());
    });
    const tempPlayer = JSON.parse(
      localStorage.getItem('player') ?? '{}'
    ) as Player;
    let createNew = false;
    if (tempPlayer.id) {
      this.currentPlayer.set(tempPlayer);
      this.apiService
        .getPlayerPlayerPlayerIdGet(this.currentPlayer().id!)
        .subscribe({
          next: (player) => {
            console.log(player);
            this.currentPlayer.set(player);
          },
          error: () => {
            createNew = true;
          },
        });
    }
    if (!tempPlayer.id || createNew) {
      this.apiService.createPlayerPlayerPost().subscribe((player) => {
        this.currentPlayer.set(player);
      });
    }
  }
  currentPlayer = signal({} as Player);
  playedGames = signal([] as Game[]);
}
