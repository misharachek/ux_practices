import { Component} from '@angular/core';

import {TodoService} from "../../service";
import {Todo} from "../../entity";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {

  constructor(
    private todoDataService: TodoService
  ) {
  }

  onAddTodo(todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
