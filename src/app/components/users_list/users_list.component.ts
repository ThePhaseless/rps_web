import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { User, UserService } from '../../../../api';
import { UserService as MyUserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './users_list.component.html',
  styleUrl: './users_list.component.scss',
})
export class UsersListComponent {
  public users = signal([] as User[]);
  constructor(
    public userService: UserService,
    public myUserService: MyUserService
  ) {
    effect(() => {
      if (!this.myUserService.loggedIn()) return;
      this.refreshUsers();
    });
  }

  public refreshUsers() {
    this.userService
      .getUsersUserAllGet()
      .subscribe((response) => this.users.set(response));
  }

  public deleteUsers(userId: string) {
    this.userService.deleteUserUserQueryUserIdDelete(userId).subscribe(() => {
      this.refreshUsers();
    });
  }
}
