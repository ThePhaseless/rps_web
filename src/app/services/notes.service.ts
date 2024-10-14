import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { DefaultService, NoteOut } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public notes = signal([] as NoteOut[]);
  constructor(private api: DefaultService, private httpService: HttpClient) {
    api.configuration.withCredentials = true;
    api.pingPingGet().subscribe();
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
