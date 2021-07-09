import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/todo.service";
import { TodoItem } from "./todo-item/todo-item.model";

@Component({
  selector: "app-todo-board",
  templateUrl: "./todo-board.component.html",
  styleUrls: ["./todo-board.component.scss"],
})
export class TodoBoardComponent implements OnInit {
  
  todoList: TodoItem[] = [];

  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.getTodoList();
    console.log(this.todoList)
  }

  ngOnInit(): void {}
}
