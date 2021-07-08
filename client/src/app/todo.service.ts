import { Injectable } from "@angular/core";
import { TodoItem } from "./_components/todo-board/todo-item/todo-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  readonly ROOT_URL: string = environment.ROOT_URL;

  todoList: TodoItem[] = [];

  constructor(private http: HttpClient) {
    this.http.get<TodoItem[]>(this.ROOT_URL).subscribe((response) => {
      this.todoList = response;
    });
  }

  
  
  // CRUD
  
  // get todos
  getAllTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.ROOT_URL);
  }

  // add todo
  addTodo(todoName: string) {
    let id = this.getNewId();
    return this.http.post(this.ROOT_URL, { id: id, todoName: todoName });
  }
  
  // delete todo
  deleteTodo(id: number) {
    const deleteEndpoint = this.ROOT_URL + id;
    return this.http.delete(deleteEndpoint);
  }
  
  // delete all todos
  deleteAllTodos() {
    let idx = this.getTodosLength();
    while (idx > 0) {
      const deleteEndpoint = this.ROOT_URL + idx;
      this.http.delete(deleteEndpoint).subscribe((data) => {
        console.log("wiped out list");
      });
      idx--;
    }
  }
  
  // little helpers here
  getTodosLength() {
    return this.todoList.length;
  }
  
  getNewId() {
    if (this.todoList.length === 0) {
      return 1;
    } else {
      return this.todoList[this.todoList.length - 1].id + 1;
    }
  }


}
