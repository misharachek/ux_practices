import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// angular material
import {
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

// testing component
import {TodoListItemComponent} from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ],
      imports: [
        MatCheckboxModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
