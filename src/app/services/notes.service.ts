import { effect, Injectable, signal } from '@angular/core';
import { Note, NoteService } from '../../../api';
import { NoteOut } from '../../../api/model/noteOut';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public notes = signal([] as Note[]);
  public allNotes = signal(undefined as Note[] | undefined);
  constructor(
    private apiService: NoteService,
    private userService: UserService
  ) {
    effect(
      () => {
        if (this.userService.loggedIn()) {
          this.getNotes();
        } else {
          this.notes.set([]);
          this.allNotes.set(undefined);
        }
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  public sendNote(name: string, note: string, password?: string) {
    this.apiService
      .createNoteNotePost({ name: name, note: note, password: password })
      .subscribe(() => {
        this.getNotes();
      });
  }

  public deleteNote(note_id: string) {
    this.apiService
      .deleteNoteNoteNoteIdDelete(note_id)
      .subscribe(() => this.getNotes());
  }

  public getNotes() {
    this.apiService.getUserNotesNoteGet().subscribe({
      next: (data) => {
        this.notes.set(data);
      },
      error: () => {
        this.notes.set([]);
      },
    });
    console.log(this.userService.google_user()?.email);
    if (this.userService.api_user()?.is_admin) {
      this.apiService.getAllNotesNoteAllGet().subscribe({
        next: (data) => {
          this.allNotes.set(data);
        },
        error: () => {
          this.allNotes.set([]);
        },
      });
    }
  }

  public decodeNote(note: NoteOut, password: string) {
    return this.apiService.getNoteNoteNoteIdGet(note.id!, password);
  }
}
