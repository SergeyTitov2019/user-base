import { Component, Input } from '@angular/core'
import { NewTask, Task } from '../../shared/types/task'
import { DUMMY_TASKS } from '../../shared/data/mock-data'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  tasks: Task[] = DUMMY_TASKS
  isAddingTask = false

  get selectedUserTask(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onAddingTask() {
    this.isAddingTask = !this.isAddingTask
  }

  onCancelAddingTask(): void {
    this.isAddingTask = false
  }

  onAddNewTask(data: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
    })
    this.isAddingTask = false

  }
}
