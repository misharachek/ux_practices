import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {CommonModule} from "@angular/common";

// modules
import {HeaderModule} from "app/commons/todolist/components/header";
import {ContentModule} from "app/commons/todolist/components/content";
import {FooterModule} from "app/commons/todolist/components/footer";

// angular material
import {MatCardModule} from '@angular/material/card';


// testig component
import {TodolistComponent} from './todolist.component';


describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodolistComponent
      ],
      imports: [
        // angular material
        MatCardModule,

        CommonModule,
        HeaderModule,
        ContentModule,
        FooterModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
