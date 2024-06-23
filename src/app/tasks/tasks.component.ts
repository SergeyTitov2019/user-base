import { Component, Input } from '@angular/core'
import { Task } from '../../shared/types/task'
import { DUMMY_TASKS } from '../../shared/data/mock-data'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  tasks: Task[] = DUMMY_TASKS

  get selectedUserTask(): Task[]{
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string): void{
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
