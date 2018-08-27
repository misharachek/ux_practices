import {Injectable} from '@angular/core';
import {Todo} from 'app/commons/todolist/entity';

@Injectable()
export class TodoService {

  // automatic incrementing of ids
  lastId: number = 0;

  // array todos
  todos: Todo[] = [];

  constructor() {}

  // post todos
  public addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // delete todos/:id
  public deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !==id);
    return this;
  }

  // update todos/:id
  public updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // get todos
  public getAllTodos(): Todo[] {
    return this.todos;
  }

  // get todos/:id
  public getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // toggle todo compleate
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
