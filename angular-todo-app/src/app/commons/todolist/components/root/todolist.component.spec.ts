import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// modules
import {HeaderModule} from "app/commons/todolist/components/header";
import {ContentModule} from "app/commons/todolist/components/content";
import {FooterModule} from "app/commons/todolist/components/footer";

// testig component
import {TodolistComponent} from './todolist.component';
import {CommonModule} from "@angular/common";

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodolistComponent
      ],
      imports: [
        CommonModule,
        HeaderModule,
        ContentModule,
        FooterModule
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
