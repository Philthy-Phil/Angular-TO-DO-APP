import { Injectable } from "@angular/core";
import { TodoItem } from "./_components/todo-board/todo-item/todo-item.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: TodoItem[];

  constructor() {
    this.todos = new Array();
  }

  getNewId() {
    if (this.todos.length == 0) {
      return 1;
    } else {
      return this.todos[this.todos.length - 1].todoId + 1;
    }
  }

  addNewItem(name: string) {
    this.todos.push(new TodoItem(name, this.getNewId()));
  }

  deleteTodo(todoId: number) {
    const idx: number = this.todos.findIndex((todo) => todo.todoId == todoId);
    this.todos.splice(idx, 1);

    // for (let i = 0; i < this.todos.length; i++) {
    //   if (this.todos[i].todoId == todoId) {
    //     this.todos.splice(i, 1);
    //   }
    // }
  }

  deleteAll() {
    this.todos.splice(0, this.todos.length);
  }
  getTodos(): TodoItem[] {
    return this.todos;
  }
}
