import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./_components/about/about.component";
import { TodoBoardComponent } from "./_components/todo-board/todo-board.component";

const routes: Routes = [
  { path: "", component: TodoBoardComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
