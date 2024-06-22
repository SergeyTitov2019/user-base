import { Component, Input } from '@angular/core'
import { Task } from '../../shared/types/task'
import { TASKS } from '../../shared/data/mock-data'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() data: any
  @Input() userId: string = ''
  @Input() name: string = ''
  tasks: Task[] = TASKS

  get selectedUserTask(){
    console.log(this.tasks.filter((task) => task.userId === this.userId))
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string){
    return this.tasks.filter((task) => task.id !== id)
  }
}
