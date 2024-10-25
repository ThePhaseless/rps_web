import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, signal } from '@angular/core';
import { DefaultService, User } from '../../../api';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedIn = signal<boolean>(false);
  connected = signal<boolean>(false);
  google_user = signal<SocialUser | null>(null);
  is_admin = signal<boolean>(false);
  api_user = signal<User | null>(null);

  constructor(
    private authService: SocialAuthService,
    private apiService: DefaultService
  ) {
    apiService.configuration.withCredentials = true;
    apiService.pingPingGet().subscribe({
      next: () => {
        this.connected.set(true);
      },
    });
    this.authService.authState.subscribe({
      next: (social_user) => {
        this.google_user.set(social_user);
        if (social_user == null) {
          return;
        }
        this.apiService.loginLoginGet(social_user.idToken).subscribe({
          next: (user) => {
            this.api_user.set(user);
            this.loggedIn.set(true);
          },
        });
      },
    });
  }

  logout() {
    this.apiService.logoutLogoutGet().subscribe(() => {
      this.authService.signOut();
      localStorage.clear();
      this.loggedIn.set(false);
    });
  }
}
