import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { DefaultService } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  google_user!: WritableSignal<SocialUser>;
  loggedIn!: WritableSignal<boolean>;

  constructor(
    private authService: SocialAuthService,
    private apiService: DefaultService
  ) {
    this.authService.authState.subscribe({
      next: (user) => {
        this.google_user = signal<SocialUser>(user);
        this.loggedIn = signal<boolean>(user != null);
        this.apiService.loginLoginGet(user.idToken).subscribe();
      },
    });
  }

  logout() {
    this.authService.signOut();
  }
}
