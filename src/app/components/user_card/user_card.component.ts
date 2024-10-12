import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    SocialLoginModule,
    MatCardModule,
    MatButton,
  ],
  templateUrl: './user_card.component.html',
  styleUrl: './user_card.component.scss',
})
export class UserCardComponent {
  public isDarkTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  constructor(
    public userService: UserService,
    public authService: SocialAuthService
  ) {}
}
