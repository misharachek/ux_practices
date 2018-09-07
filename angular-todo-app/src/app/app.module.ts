import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// modules
import {TodolistModule} from './commons/todolist';

// components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodolistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
