import { Injectable, signal } from '@angular/core';
import { DefaultService, NoteOut } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public notes = signal([] as NoteOut[]);
  constructor(private api: DefaultService) {}

  public sendNote(name: string, note: string, password: string) {
    this.api.createNoteNotePost(name, note, password).subscribe(() => {
      this.getNotes();
    });
  }

  public getNotes() {
    this.api.getNotesNoteGet().subscribe((data) => {
      this.notes.set(data);
    });
  }

  public decodeNote(note: NoteOut, password: string) {
    if (note.id === undefined) {
      return;
    }
    this.api.getNoteNoteNoteIdGet(note.id, password);
  }
}
