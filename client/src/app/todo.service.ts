import { Injectable } from "@angular/core";
import { ITodoItem } from "./_components/todo-board/todo-item/todo-item.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  readonly ROOT_URL: string = environment.ROOT_URL;

  todoList: ITodoItem[] = [];

  constructor(private http: HttpClient) {
    this.http.get<ITodoItem[]>(this.ROOT_URL).subscribe((response) => {
      this.todoList = response;
    });
  }

  getAllTodos(): Observable<ITodoItem[]> {
    return this.http.get<ITodoItem[]>(this.ROOT_URL);
  }

  getTodosLength() {
    return this.todoList.length;
  }

  addTodo(todoName: string) {
    let id = this.getNewId();
    return this.http.post(this.ROOT_URL, { id: id, todoName: todoName });
  }

  deleteTodo(id: number) {
    const deleteEndpoint = this.ROOT_URL + id;
    return this.http.delete(deleteEndpoint);
  }

  getNewId() {
    if (this.todoList.length === 0) {
      return 1;
    } else {
      return this.todoList[this.todoList.length - 1].id + 1;
    }
  }

  deleteAllTodos() {
    let idx = this.getTodosLength();
    while (idx > 0) {
      const deleteEndpoint = this.ROOT_URL + idx;
      this.http.delete(deleteEndpoint).subscribe((data) => {
        console.log("entry deleted");
      });
      idx--;
    }
  }
}
