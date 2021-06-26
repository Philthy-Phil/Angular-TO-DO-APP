import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/todo.service';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  faPlus = faPlus;

  todoName: string = "";

  constructor(private todoData: TodoService) { }

  ngOnInit(): void {
  }

  addNewTodo() {
    // this.todoData.todos.push(new TodoItem(this.todoName, this.todoData.getNewId()));
    this.todoData.addNewItem(this.todoName);
    this.todoName = "";
  }
}
