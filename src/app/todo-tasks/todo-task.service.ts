import { Injectable, signal } from '@angular/core'
import { TodoTask, TodoTaskStatus } from './task.model'

@Injectable({
  providedIn: 'root',
})
export class TodoTaskService {
  private tasks = signal<TodoTask[]>([])
  allTasks = this.tasks.asReadonly()

  addTask(taskData: { title: string, description: string }) {
    const newTask: TodoTask = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    }
    this.tasks.update((oldTask) => [...oldTask, newTask])
  }

  updateTodoTaskService(taskId: string, newStatus: TodoTaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task,
    ))

  }


}
