import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../../shared/types/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<User>()
  
  onClick() {
    this.select.emit(this.user)
  }
}
