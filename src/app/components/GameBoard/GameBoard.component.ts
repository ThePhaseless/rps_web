import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './GameBoard.component.html',
  styleUrl: './GameBoard.component.scss',
})
export class GameBoardComponent {
  public ended;
  public game;
  constructor(private websocket: WebsocketService) {
    this.ended = websocket.ended;
    this.game = websocket.game;
  }
  isSelected(move_index: number) {
    return this.websocket.currentChoice() === move_index;
  }
  makeMove(move_index: number) {
    switch (move_index) {
      case 1:
      case 2:
      case 3:
        this.websocket.currentChoice.set(move_index);
    }
  }
}
