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
  userInfo: User | null = null
  selectedUserid: string | undefined

  onFoo(event: User) {
    this.selectedUserid = event.id
    this.userInfo = event
  }

  get selectedUser(): User | null{
    return this.users.find((user: User) => user.id === this.selectedUserid)!
  }

}
