import { Component, Input, OnInit } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.scss"],
})
export class TodoFooterComponent implements OnInit {
  faDumpster = faDumpster;

  @Input() pendingTodos: number = 0;

  constructor() {}

  ngOnInit(): void {}

  clearAllTodos() {
    console.log("clicked clear all");
    // TO-DO implement reset list
  }
}
