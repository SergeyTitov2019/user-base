import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../shared/data/mock-data'
import { User } from '../../../shared/types/user'

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {



  users: any = DUMMY_USERS
  selectedUserId: string | undefined
  selected: boolean = false

  onSelectUser(event: User) {
    this.selectedUserId = event.id
    this.selected = true
  }

  get selectedUser(): User | null{
    return this.users.find((user: User) => user.id === this.selectedUserId)!
  }


}
