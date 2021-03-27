import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';



@NgModule({
  declarations: [FilterComponent, TodoListComponent, TodoDetailComponent, TodoShellComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
