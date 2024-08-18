import { Component, ElementRef, inject, viewChild } from '@angular/core'
import { TodoTaskService } from '../todo-task.service'

@Component({
  selector: 'app-todo-new-task',
  templateUrl: './todo-new-task.component.html',
  styleUrl: './todo-new-task.component.css'
})

export class TodoNewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private todoTaskService = inject(TodoTaskService)


  onAddTask(title: string, description: string) {
    this.todoTaskService.addTask({ title, description })
    this.formEl()?.nativeElement.reset();
  }
}
