import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-log-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log_board.component.html',
  styleUrl: './log_board.component.scss',
})
export class LogBoardComponent {
  public game;
  constructor(private websocket: WebsocketService) {
    this.game = websocket.game;
  }
}
