import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  faPlus = faPlus;

  newTodo: string = "";

  @Output() onAddNewTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTodoToBoard() {
    this.onAddNewTodo.emit(this.newTodo);
    this.newTodo = "";
  }
}
