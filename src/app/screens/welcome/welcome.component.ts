import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserTileComponent } from '../../components/user_tile/user_tile.component';
import { JoinTileComponent } from '../../components/join_tile/join_tile.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, UserTileComponent, JoinTileComponent],
  styleUrl: './welcome.component.css',
  templateUrl: './welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
