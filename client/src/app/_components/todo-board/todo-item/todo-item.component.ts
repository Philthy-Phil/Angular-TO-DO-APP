import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-todo",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  faTrash = faTrash;

  @Input() todoName: string = "";
  @Input() todoID: number = 0;
  @Input() todoIDXtoDelete: number = 0;
  @Input() existingTodos: any[] = [];

  updatedTodos: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  @Output() onDeleteNewTodos: EventEmitter<any> = new EventEmitter();

  deleteTodoToBoard() {
    this.existingTodos.splice(this.todoIDXtoDelete, 1);
    this.updatedTodos = this.existingTodos;
    // console.log(this.existingTodos);
    // console.log(this.todoID + " " + this.todoName);
    // console.log(this.todoIDXtoDelete + " " + this.todoName);
    this.onDeleteNewTodos.emit(this.updatedTodos);
  }
}
