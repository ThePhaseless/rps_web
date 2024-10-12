import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { DefaultService } from '../../../api';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  google_user!: WritableSignal<SocialUser>;
  loggedIn!: WritableSignal<boolean>;

  constructor(
    private authService: SocialAuthService,
    private apiService: DefaultService,
    private notesService: NotesService
  ) {
    this.authService.authState.subscribe({
      next: (social_user) => {
        this.apiService.loginLoginGet(social_user.idToken).subscribe(() => {
          this.google_user = signal<SocialUser>(social_user);
          this.loggedIn = signal<boolean>(social_user != null);
          this.notesService.getNotes();
        });
      },
    });
  }

  logout() {
    this.apiService.logoutLogoutGet().subscribe(() => {
      this.notesService.notes.set([]);
      this.authService.signOut();
      this.loggedIn.set(false);
    });
  }
}
