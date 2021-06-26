import { Injectable } from "@angular/core";
import { TodoItem } from "./_components/todo-board/todo-item/todo-item.model";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: TodoItem[];

  constructor(private http: HttpClient) {
    this.todos = new Array();
  }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: "json",
      observe: "body",
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getNewId() {
    if (this.todos.length == 0) {
      return 1;
    } else {
      return this.todos[this.todos.length - 1].todoId + 1;
    }
  }

  addNewItem(name: string) {
    let newId = this.getNewId();
    this.todos.push(new TodoItem(name, newId));
    this.request("POST", `${environment.serverUrl}/todos`, { newId, name });
  }

  deleteTodo(todoId: number) {
    const idx: number = this.todos.findIndex((todo) => todo.todoId == todoId);
    this.todos.splice(idx, 1);
    this.request("DELETE", `${environment.serverUrl}/todos/${todoId}`);
  }

  deleteAll() {
    this.todos.splice(0, this.todos.length);
  }

  getTodos(): TodoItem[] {
    this.loadTodoData();
    return this.todos;
  }

  getTodosLength() {
    return this.todos.length;
  }

  loadTodoData() {
    this.deleteAll();
    this.request("GET", `${environment.serverUrl}/todos`).then(
      (response: any) => {
        let tempArray = response.map((data: any) => {
          this.todos.push(new TodoItem(data.name, data.id));
        });
      }
    );
  }
}
