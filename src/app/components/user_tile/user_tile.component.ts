import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user_tile.component.html',
  styleUrl: './user_tile.component.scss',
})
export class UserTileComponent {}
