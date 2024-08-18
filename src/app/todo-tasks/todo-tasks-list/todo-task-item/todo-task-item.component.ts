import { Component, computed, inject, input } from '@angular/core'
import { TodoTaskStatus, TodoTask } from '../../task.model'
import { TodoTaskService } from '../../todo-task.service'

@Component({
  selector: 'app-todo-task-item',
  templateUrl: './todo-task-item.component.html',
  styleUrl: './todo-task-item.component.css'
})

export class TodoTaskItemComponent {
  private todoTaskService = inject(TodoTaskService)
  task = input.required<TodoTask>();

  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TodoTaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.todoTaskService.updateTodoTaskService(taskId, newStatus)
  }


}
