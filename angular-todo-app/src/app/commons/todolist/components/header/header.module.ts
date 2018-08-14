import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//angular material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

// component
import { HeaderComponent } from './root/header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    // angular material
    MatInputModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
