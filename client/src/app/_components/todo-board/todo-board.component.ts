import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/todo.service";
import { ITodoItem } from "./todo-item/todo-item.interface";

@Component({
  selector: "app-todo-board",
  templateUrl: "./todo-board.component.html",
  styleUrls: ["./todo-board.component.scss"],
})
export class TodoBoardComponent implements OnInit {
  todoList: ITodoItem[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getAllTodos().subscribe((data) => {
      this.todoList = data;
    });
  }
  
  ngOnInit(): void {}
  
 
}
