export class TodoItem {
  todoId: number;
  todoName: string;

  constructor(todoName: string, todoId: number) {
    this.todoName = todoName;
    this.todoId = todoId;
  }
}