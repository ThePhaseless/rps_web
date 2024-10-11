import { Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from '../../api';
import { JoinTileComponent } from './components/join_tile/join_tile.component';
import { UserTileComponent } from './components/user_tile/user_tile.component';
import { LocalService } from './services/local.service';
import { LoadingCardComponent } from './components/loading_card/loading_card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserTileComponent,
    JoinTileComponent,
    LoadingCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RPS_WEB';
  player: Signal<Player>;
  constructor(private playerService: LocalService) {
    this.player = this.playerService.currentPlayer.asReadonly();

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark'); // Remove darkMode
    }
  }
}
