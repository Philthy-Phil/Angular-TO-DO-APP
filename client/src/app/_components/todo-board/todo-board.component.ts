import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-board",
  templateUrl: "./todo-board.component.html",
  styleUrls: ["./todo-board.component.scss"],
})
export class TodoBoardComponent implements OnInit {
  todoID: number = 1;
  todos: any[] = [
    {
      todoID: 1,
      todoName: "Get Shit Done!",
    },
  ];

  pendingTodos: number = this.todos.length;

  newTodoFromForm: string = "";

  updateTodosFromItem(event: any) {
    this.todos = event;
    this.pendingTodos = this.todos.length;
  }

  addNewTodoFromForm(event: any) {
    this.newTodoFromForm = event;

    this.todos.push({
      todoID: this.todoID + 1,
      todoName: this.newTodoFromForm,
    });
    this.pendingTodos = this.todos.length;
  }

  constructor() {}

  ngOnInit(): void {}
}
