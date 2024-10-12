import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterOutlet } from '@angular/router';
import { LoadingCardComponent } from './components/loading_card/loading_card.component';
import { NoteCreateComponent } from './components/note_create/note_create.component';
import { NoteListComponent } from './components/note_list/note_list.component';
import { UserCardComponent } from './components/user_card/user_card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingCardComponent,
    NoteCreateComponent,
    MatExpansionModule,
    NoteListComponent,
    UserCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RPS_WEB';

  constructor() {
    // if dark theme, add dark to html
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    }
  }
}
