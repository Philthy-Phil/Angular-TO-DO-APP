import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './_components/todo-board/todo-form/todo-form.component';
import { TodoItemComponent } from './_components/todo-board/todo-item/todo-item.component';
import { TodoHeaderComponent } from './_components/todo-board/todo-header/todo-header.component';
import { TodoFooterComponent } from './_components/todo-board/todo-footer/todo-footer.component';
import { TodoBoardComponent } from './_components/todo-board/todo-board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoBoardComponent,
    TodoFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }