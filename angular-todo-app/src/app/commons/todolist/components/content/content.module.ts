import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContentComponent } from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
