import { Component, Output, EventEmitter, Input, signal } from '@angular/core'
import { NewTask } from '../../../../shared/types/task'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTask>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  onCancel(){
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    })
  }
}
