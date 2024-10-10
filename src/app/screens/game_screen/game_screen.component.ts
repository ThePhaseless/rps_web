import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game_screen.component.html',
  styleUrl: './game_screen.component.scss',
})
export class GameScreenComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public gameID = '';
  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        console.log(params);
        this.gameID = params['game_id'];
      })
      .unsubscribe();
  }
}
