import { Injectable } from "@angular/core";
import { TodoItem } from "./_components/todo-board/todo-item/todo-item.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  readonly ROOT_URL: string = environment.ROOT_URL;

  private todoList: TodoItem[] = [];

  constructor(private http: HttpClient) {
    this.todoList = new Array();
    this.loadTodoData();
    // this.todoList.push(new TodoItem(1, "Get Shit Done!"));
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  getTodoListLength() {
    return this.todoList.length;
  }

  addNewTodo(todoName: string) {
    let newId = this.getNewId();
    this.todoList.push(new TodoItem(newId, todoName));
    this.http.post(this.ROOT_URL, { id: newId, todoName: todoName }).subscribe(response =>{
      console.log("successfully added todo", newId, todoName);
    });
  }

  deleteTodo(id: number) {
    let idxOfDelete = this.todoList.findIndex((todo) => todo.id === id);
    this.todoList.splice(idxOfDelete, 1);
    this.http.delete(`${this.ROOT_URL}${id}`).subscribe((response) => {
      console.log(
        "successfully deleted todo",
        this.todoList[idxOfDelete].id,
        this.todoList[idxOfDelete].todoName
      );
    });
  }

  deleteAllTodos() {
    this.todoList.forEach(todo => {
      this.http.delete(`${this.ROOT_URL}${todo.id}`).subscribe((response) => {
        console.log("successfully wiped out the whole todoList");
      }); 
    });
    this.todoList.splice(0, this.todoList.length);
  }

  getNewId() {
    if (this.todoList.length == 0) {
      return 1;
    } else {
      return this.todoList[this.todoList.length - 1].id + 1;
    }
  }

  loadTodoData() {
    this.http.get<TodoItem[]>(this.ROOT_URL).subscribe((response) => {
      let temp = response.map((todoData) => {
        this.todoList.push(new TodoItem(todoData.id, todoData.todoName));
      });
      console.log("successfully loaded todoData");
    });
  }
}
