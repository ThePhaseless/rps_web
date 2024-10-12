import { CommonModule } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoteOut } from '../../../../api';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-tile',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './note_tile.component.html',
  styleUrl: './note_tile.component.scss',
})
export class NoteTileComponent {
  public passwordController = new FormControl('', [Validators.required]);
  public currentError = signal('');
  public note = model<NoteOut>();
  constructor(public notesService: NotesService) {}

  public decrypt() {
    this.notesService
      .decodeNote(this.note()!, this.passwordController.value!)
      .subscribe({
        next: (decryptedNote) => {
          this.note.set(decryptedNote);
        },
        error: () => {
          this.passwordController.setErrors({ wrong: true });
          this.currentError.set(this.setError());
        },
      });
  }

  public setError() {
    if (this.passwordController.hasError('required')) {
      return 'Password is required';
    }
    if (this.passwordController.hasError('wrong')) {
      return 'Wrong password';
    }
    return '';
  }
}
