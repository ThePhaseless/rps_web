import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoinTileComponent } from './components/join_tile/join_tile.component';
import { UserTileComponent } from './components/user_tile/user_tile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserTileComponent, JoinTileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RPS_WEB';
  constructor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark'); // Remove darkMode
    }
  }
}
