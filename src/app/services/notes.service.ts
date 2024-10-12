import { effect, Injectable, signal } from '@angular/core';
import { DefaultService, NoteOut } from '../../../api';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public notes = signal([] as NoteOut[]);
  constructor(private api: DefaultService, userService: UserService) {
    effect(() => {
      if (userService.loggedIn()) {
        this.getNotes();
      } else {
        this.notes.set([]);
      }
    });
  }

  public sendNote(name: string, note: string, password?: string) {
    this.api.createNoteNotePost(name, note, password).subscribe(() => {
      this.getNotes();
    });
  }

  public getNotes() {
    this.api.getNotesNoteGet().subscribe({
      next: (data) => {
        this.notes.set(data);
      },
      error: () => {
        this.notes.set([]);
      },
    });
  }

  public decodeNote(note: NoteOut, password: string) {
    return this.api.getNoteNoteNoteIdGet(note.id!, password);
  }
}
