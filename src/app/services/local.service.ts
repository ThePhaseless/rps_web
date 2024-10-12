import { computed, effect, Injectable, signal } from '@angular/core';
import { DefaultService, Game, Player } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(private apiService: DefaultService) {
    // load players' matches
    effect(() => {
      const _player = this.currentPlayer();

      if (_player.id) {
        console.log(this.currentPlayer());
        localStorage.setItem('player', _player.id ?? '');
        this.apiService.getGamesGamesGet(true).subscribe({
          next: (games) => {
            this.playedGames.set(games);
          },
          error: () => {
            console.log('failed to load games');
          },
        });
      }
    });

    const tempPlayerID = localStorage.getItem('player');
    if (tempPlayerID !== null) {
      this.apiService.createPlayerLoginGet(undefined, tempPlayerID).subscribe({
        next: (player) => {
          this.currentPlayer.set(player);
        },
        error: () => {
          console.log('failed to load player');
          this.apiService.createPlayerLoginGet().subscribe((player) => {
            this.currentPlayer.set(player);
          });
        },
      });
    }
  }

  currentPlayer = signal({} as Player);
  playedGames = signal([] as Game[]);
  loading = signal(true);

  wonGames = computed(() => {
    return this.playedGames().filter(
      (game) => game.winner_id === this.currentPlayer().id
    );
  });

  lostGames = computed(() => {
    return this.playedGames().filter(
      (game) => game.winner_id !== this.currentPlayer().id
    );
  });

  winratio = computed(() => {
    if (this.playedGames().length === 0) {
      return 0;
    }
    return ((this.wonGames().length / this.playedGames().length) * 100).toFixed(
      2
    );
  });
}
