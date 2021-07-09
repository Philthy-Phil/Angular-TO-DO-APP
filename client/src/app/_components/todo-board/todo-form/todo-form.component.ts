import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  faPlus = faPlus;

  todoName: string = "";

  constructor(private todoService: TodoService) {}

  onClickAddNewTodo() {
    let invalid = "missing input";
    if(this.todoName === "") {
      this.todoName = invalid;
    } else if (this.todoName !== invalid) {
      this.todoService.addNewTodo(this.todoName);
      this.todoName = "";
    }
  }

  ngOnInit(): void {}
}
