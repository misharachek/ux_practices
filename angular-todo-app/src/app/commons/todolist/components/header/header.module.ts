import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// component
import { HeaderComponent } from './root/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
