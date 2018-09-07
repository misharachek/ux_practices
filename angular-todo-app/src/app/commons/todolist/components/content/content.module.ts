import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// components
import {ContentComponent} from './root';
import {TodoListItemComponent} from './todo-list-item';

// angular material
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [
    ContentComponent,
    TodoListItemComponent
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
