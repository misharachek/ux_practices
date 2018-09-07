import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// angular material
import {MatCardModule} from '@angular/material/card';

// modules
import {HeaderModule} from "./header";
import {ContentModule} from "./content";
import {FooterModule} from "./footer";

// components
import { TodolistComponent } from './root';

// service
import {TodoService} from "../service";

@NgModule({
  imports: [
    // angular material
    MatCardModule,

    // modules
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule,

    FormsModule,
  ],
  providers: [TodoService],
  declarations: [TodolistComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
