import { Component, OnInit } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.scss"],
})
export class TodoFooterComponent implements OnInit {
  faDumpster = faDumpster;

  constructor(public todoData: TodoService) {}

  ngOnInit(): void {}

  deleteAllTodos() {
    this.todoData.deleteAll();
  }
}
