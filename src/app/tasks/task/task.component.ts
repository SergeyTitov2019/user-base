import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from '../../../shared/types/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() complete = new EventEmitter<string>()

  onComplete() {
    this.complete.emit(this.task.id)
  }
}
