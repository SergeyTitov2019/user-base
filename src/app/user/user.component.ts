import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../../shared/types/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({ required: true }) user!: User
  @Input() selected: boolean = false
  @Output() select = new EventEmitter<User>()

  onSelectUSer() {
    this.select.emit(this.user)
  }
}
