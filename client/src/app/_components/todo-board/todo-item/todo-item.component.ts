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

  @Input() id: number = 0;
  @Input() todoName: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onClickDeleteTodo() {
    this.todoService.deleteTodo(this.id);
  }

}
