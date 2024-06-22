import { Component } from '@angular/core'
import { DUMMY_USERS } from '../shared/data/mock-data'
import { User } from '../shared/types/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
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
