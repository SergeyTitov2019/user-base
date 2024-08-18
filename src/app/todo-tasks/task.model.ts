export type TodoTaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface TodoTask {
  id: string;
  title: string;
  description: string;
  status: TodoTaskStatus;
}
