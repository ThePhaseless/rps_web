import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NotesService } from '../../services/notes.service';
import { NoteTileComponent } from '../note_tile/note_tile.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NoteTileComponent,
  ],
  templateUrl: './note_list.component.html',
  styleUrl: './note_list.component.scss',
})
export class NoteListComponent {
  constructor(public notesService: NotesService) {
    notesService.getNotes();
  }
}
