import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-angular-project';

  users = DUMMY_USERS;
  selectedUser = 'u1';

  get selectedUserName() {
    return this.users.find((user) => user.id === this.selectedUser);
  }

  onSelectUser(id: string) {
    this.selectedUser = id;
  }
}
