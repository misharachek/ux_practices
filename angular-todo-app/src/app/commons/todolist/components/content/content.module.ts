import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContentComponent } from './root';
import { TodoListItemComponent } from './todo-list-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent,
    TodoListItemComponent
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
