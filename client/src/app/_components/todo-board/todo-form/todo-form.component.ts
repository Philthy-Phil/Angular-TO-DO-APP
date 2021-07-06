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

  ngOnInit(): void {}

  onClickAddTodo() {
    this.todoService.addTodo(this.todoName).subscribe(data => {
      console.log(`successfully added todo -- ${data}`);
    });
  }

}
