import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatExpansionModule],
  templateUrl: './note_list.component.html',
  styleUrl: './note_list.component.scss',
})
export class NoteListComponent {
  constructor(public notesService: NotesService) {
    notesService.getNotes();
  }
}
