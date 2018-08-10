import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import {HeaderModule} from "./header";
import {ContentModule} from "./content";
import {FooterModule} from "./footer";

// components
import { TodolistComponent } from './root';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule
  ],
  declarations: [TodolistComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
