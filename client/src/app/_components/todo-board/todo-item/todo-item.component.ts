import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: "app-todo",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  faTrash = faTrash;

  @Input() todoName: string = "";
  @Input() todoId: number = 0;

  constructor(private todoData: TodoService) {}

  ngOnInit(): void {}

  deleteTodo() {
    this.todoData.deleteTodo(this.todoId);
  }
}
