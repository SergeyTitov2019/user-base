import { Component, computed, Input, input, Output, EventEmitter, signal, output } from '@angular/core'
import { DUMMY_USERS } from '../../shared/data/mock-data'
import { User } from '../../shared/types/user'

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent {
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<User>()

  // select = output<User>()

  onClick() {
    this.select.emit(this.user)
  }
}
