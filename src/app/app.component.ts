import { Component, effect, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterOutlet } from '@angular/router';
import { AllNoteListComponent } from './components/all_note_list/all_note_list.component';
import { LoadingCardComponent as SignInInfoComponent } from './components/loading_card/loading_card.component';
import { LoadingDialogComponent } from './components/loading_dialog/loading_dialog.component';
import { NoteCreateComponent } from './components/note_create/note_create.component';
import { NoteListComponent } from './components/note_list/note_list.component';
import { UserCardComponent } from './components/user_card/user_card.component';
import { UsersListComponent } from './components/users_list/users_list.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignInInfoComponent,
    NoteCreateComponent,
    MatExpansionModule,
    NoteListComponent,
    UserCardComponent,
    AllNoteListComponent,
    UsersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RPS_WEB';

  readonly dialog = inject(MatDialog);
  dialogRef!: MatDialogRef<LoadingDialogComponent>;

  constructor(public userService: UserService) {
    // if dark theme, add dark to html
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    }

    effect(() => {
      if (this.userService.connected()) this.dialog.closeAll();
    });
  }
  afterNextRender(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent);
  }
}
