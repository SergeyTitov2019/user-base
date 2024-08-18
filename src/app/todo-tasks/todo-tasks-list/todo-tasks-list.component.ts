import { Component, computed, inject, signal } from '@angular/core'
import { TodoTaskService } from '../todo-task.service'

@Component({
  selector: 'app-todo-tasks-list',
  templateUrl: './todo-tasks-list.component.html',
  styleUrl: './todo-tasks-list.component.css'
})

export class TodoTasksListComponent {
  private todoTaskService = inject(TodoTaskService)
  selectedFilter = signal<string>('all');
  // tasks = this.todoTaskService.allTasks;
  tasks = computed(() => {
    switch (this.selectedFilter()){
      case 'all':
        return this.todoTaskService.allTasks()
      case 'open':
        return this.todoTaskService
          .allTasks()
          .filter(i => i.status === 'OPEN')
      case 'in-progress':
        return this.todoTaskService
          .allTasks()
          .filter(i => i.status === 'IN_PROGRESS')
      case 'done':
        return this.todoTaskService
          .allTasks()
          .filter(i => i.status === 'DONE')
      default:
        return this.todoTaskService.allTasks()
    }
  })


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
