import { Component, inject, Input } from '@angular/core'
import { NewTask, Task } from '../../shared/types/task'
import { DUMMY_TASKS } from '../../shared/data/mock-data'
import { TasksService } from './tasks.service'

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
  private taskService = inject(TasksService)


  get selectedUserTask(): Task[] {
    return this.taskService.getUserTask(this.userId)
  }

  onCompleteTask(id: string): void {
    return this.taskService.removeTask(id)
  }

  onAddingTask() {
    this.isAddingTask = !this.isAddingTask
  }

  onCancelAddingTask(): void {
    this.isAddingTask = false
  }


}
