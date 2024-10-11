import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { DefaultService } from '../../../../api';
import { GameExistsValidator } from '../../utils/game_exists.validator';

@Component({
  selector: 'app-join-tile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatButton,
  ],
  templateUrl: './join_tile.component.html',
  styleUrl: './join_tile.component.scss',
})
export class JoinTileComponent {
  public formControl: FormControl<string | null>;
  constructor(
    private apiService: DefaultService,
    private validator: GameExistsValidator,
    private router: Router
  ) {
    this.formControl = new FormControl<string>('', {
      validators: [Validators.required],
      asyncValidators: [this.validator.validate.bind(this.validator)],
    });
  }

  createGame(): void {
    this.apiService.createGameGamePost().subscribe((gameID) => {
      this.router.navigate(['game', gameID.id]);
    });
  }
}
