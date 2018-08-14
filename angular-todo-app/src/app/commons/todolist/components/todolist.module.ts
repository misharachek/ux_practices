import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import {MatCardModule} from '@angular/material/card';

// modules
import {HeaderModule} from "./header";
import {ContentModule} from "./content";
import {FooterModule} from "./footer";

// components
import { TodolistComponent } from './root';

@NgModule({
  imports: [
    // angular material
    MatCardModule,

    // modules
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule
  ],
  declarations: [TodolistComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
