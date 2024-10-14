import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, signal } from '@angular/core';
import { DefaultService } from '../../../api';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedIn = signal<boolean>(false);
  google_user = signal<SocialUser | null>(null);

  constructor(
    private authService: SocialAuthService,
    private apiService: DefaultService,
    private notesService: NotesService
  ) {
    this.authService.authState.subscribe({
      next: (social_user) => {
        this.loggedIn.set(social_user != null);
        this.google_user.set(social_user);
        if (social_user == null) {
          return;
        }
        this.apiService
          .loginLoginGet(social_user.idToken)
          .subscribe((user_id) => {
            this.apiService.configuration.credentials = {
              user_id: user_id.id!,
            };
            this.notesService.getNotes();
          });
      },
    });
  }

  logout() {
    this.apiService.logoutLogoutGet().subscribe(() => {
      this.notesService.notes.set([]);
      this.authService.signOut();
      localStorage.clear();
      this.loggedIn.set(false);
    });
  }
}
