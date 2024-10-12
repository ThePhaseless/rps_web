import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-create',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './note_create.component.html',
  styleUrl: './note_create.component.scss',
})
export class NoteCreateComponent {
  private _formBuilder = inject(FormBuilder);
  formGroup = this._formBuilder.group({
    name: [localStorage.getItem('name') ?? '', Validators.required],
    note: [localStorage.getItem('note') ?? '', Validators.required],
    password: [''],
  });

  constructor(private notesService: NotesService) {
    this.formGroup.valueChanges.subscribe(() => {
      localStorage.setItem('name', this.formGroup.get('name')!.value!);
      localStorage.setItem('note', this.formGroup.get('note')!.value!);
    });
  }

  sendNote() {
    if (!this.formGroup.valid) {
      return;
    }
    this.notesService.sendNote(
      this.formGroup.get('name')!.value!,
      this.formGroup.get('note')!.value!,
      this.formGroup.get('password')!.value!
    );
  }
}
