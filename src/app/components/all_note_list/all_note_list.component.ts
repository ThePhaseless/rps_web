import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NotesService } from '../../services/notes.service';
import { NoteTileComponent } from '../note_tile/note_tile.component';

@Component({
  selector: 'app-all-note-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    NoteTileComponent,
  ],
  templateUrl: './all_note_list.component.html',
  styleUrl: './all_note_list.component.scss',
})
export class AllNoteListComponent {
  readableDate(string: string) {
    return new Date(string).toLocaleString(undefined, {
      year: '2-digit',
      month: 'long',
      day: 'numeric',
    });
  }
  constructor(public notesService: NotesService) {
    notesService.allNotes();
  }
}
