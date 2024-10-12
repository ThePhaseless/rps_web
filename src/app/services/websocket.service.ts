import { effect, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Game, Player, PlayerChoice } from '../../../api';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public game = signal<Game | null>(null);
  public gameWebsocket: WebSocket | null = null;
  public players: (Player | string)[] = [];
  public ended = signal(false);

  public currentChoice = signal(null as PlayerChoice | null);

  constructor() {
    effect(() => {
      console.log(this.currentChoice());
      if (
        this.gameWebsocket?.readyState === WebSocket.OPEN &&
        this.currentChoice() !== null
      ) {
        this.gameWebsocket?.send(
          JSON.stringify({
            action: 'play',
            choice: this.currentChoice(),
          })
        );
      }
    });
  }

  startWebsocket(game_id: string, router: Router) {
    const API_BASE_PATH = environment.API_BASE_PATH.replace('http://', '');
    this.gameWebsocket = new WebSocket(
      `ws://${API_BASE_PATH}/game/${game_id}/ws`
    );

    this.gameWebsocket.onerror = (event) => {
      console.log(event);
      if (game_id !== '0') router.navigate(['']);
    };

    this.gameWebsocket.onopen = () => {
      this.gameWebsocket!.send(
        JSON.stringify({
          action: 'join',
        })
      );

      this.ended.set(false);
    };

    this.gameWebsocket.onclose = () => {
      this.ended.set(true);
      this.currentChoice.set(null);
      this.gameWebsocket!.close();
      this.gameWebsocket = null;
      this.game.set(null);
      this.players = [];
    };

    this.gameWebsocket!.onmessage = (event) => {
      switch (event.data['action']) {
        // Current game joined or reconnected
        case 'resumed':
        case 'connected': {
          const data = event.data['game'] as Game;
          this.game.set(data);
          this.players.push(...(data.player_ids ?? []));
          break;
        }
        // New player joined
        case 'joined': {
          const data = event.data['player'] as Player;
          this.game.update((game) => {
            if (game) {
              game.player_ids?.push(data.id!);
            }
            return game;
          });
          this.players.push(data);
          break;
        }
        case 'round_ended': {
          this.currentChoice.set(null);
          break;
        }
        case 'log': {
          console.log(event.data['log']);
          const data = event.data['log'] as string;
          this.game.update((game) => {
            if (game) {
              game.logs?.push(data);
            }
            return game;
          });
          break;
        }
        case 'game_ended': {
          this.game.set(event.data['game'] as Game);
          break;
        }
      }
    };
  }
}
