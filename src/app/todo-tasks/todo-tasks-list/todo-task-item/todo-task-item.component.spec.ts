import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskItemComponent } from './todo-task-item.component';

describe('TodoTaskItemComponent', () => {
  let component: TodoTaskItemComponent;
  let fixture: ComponentFixture<TodoTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTaskItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
