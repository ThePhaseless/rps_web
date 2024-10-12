import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../../../api';
import { GameBoardComponent } from '../../components/GameBoard/GameBoard.component';
import { LogBoardComponent } from '../../components/log_board/log_board.component';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [CommonModule, GameBoardComponent, LogBoardComponent],
  templateUrl: './game_screen.component.html',
  styleUrl: './game_screen.component.scss',
})
export class GameScreenComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private websocket: WebsocketService
  ) {
    this.game = websocket.game.asReadonly();
  }
  public game: Signal<Game | null>;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const game_id = params['game_id'];
      if (game_id === '0') {
        return;
      }
      this.websocket.startWebsocket(game_id, this.router);
    });
  }
}
