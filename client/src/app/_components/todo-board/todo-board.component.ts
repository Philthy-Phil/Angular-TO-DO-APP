import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss'],
})
export class TodoBoardComponent implements OnInit {
  
  todoList: any[] = [
    {
      todoName: 'Test 1',
    },
    {
      todoName: 'Test 2',
    },
    {
      todoName: 'Test 3',
    },
    {
      todoName: 'Test 4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
