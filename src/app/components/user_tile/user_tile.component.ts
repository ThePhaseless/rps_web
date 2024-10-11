import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Player } from '../../../../api';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-user-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './user_tile.component.html',
  styleUrl: './user_tile.component.scss',
})
export class UserTileComponent {
  public player: Signal<Player>;
  constructor(private playerService: LocalService) {
    this.player = this.playerService.currentPlayer.asReadonly();
  }
}
