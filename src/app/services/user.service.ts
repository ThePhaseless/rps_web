import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, Signal, signal } from '@angular/core';
import { DefaultService } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  google_user!: Signal<SocialUser>;
  loggedIn!: Signal<boolean>;

  constructor(
    private authService: SocialAuthService,
    private apiService: DefaultService
  ) {
    this.authService.authState.subscribe((user) => {
      this.google_user = signal<SocialUser>(user);
      this.loggedIn = signal<boolean>(user != null);

      if (user != null) {
        this.apiService.loginLoginGet(user.idToken).subscribe();
      }
    });
  }
}
