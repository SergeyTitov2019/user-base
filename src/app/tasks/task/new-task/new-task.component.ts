import { Component, Output, EventEmitter, Input, signal, inject } from '@angular/core'
import { NewTask } from '../../../../shared/types/task'
import { TasksService } from '../../tasks.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userid!: string
  @Output() close = new EventEmitter<void>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  private taskService = inject(TasksService)

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userid)
    this.close.emit()

  }
}
