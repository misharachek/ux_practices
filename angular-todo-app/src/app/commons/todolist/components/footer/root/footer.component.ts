import { Component, Input } from '@angular/core';
import {Todo} from "../../../entity";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  @Input()
  todos: Todo[];

  constructor() {
  }

}
