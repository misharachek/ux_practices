import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import {Todo} from 'app/commons/todolist/entity';
import {locales} from "./locale";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  newTodo: Todo = new Todo();
  locales = locales;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  public addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
