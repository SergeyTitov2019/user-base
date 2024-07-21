import { Injectable } from '@angular/core'
import { DUMMY_TASKS } from '../../shared/data/mock-data'
import { NewTask } from '../../shared/types/task'

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = DUMMY_TASKS

  constructor() {
    const savedTask = localStorage.getItem('tasks')
    if (savedTask) {
      this.tasks = JSON.parse(savedTask)
    }
  }

  addTask(data: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
    })
    this.onSaveTask()
  }

  getUserTask(id: string) {
    return this.tasks.filter(task => task.userId === id)
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
    this.onSaveTask()
  }

  onSaveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
