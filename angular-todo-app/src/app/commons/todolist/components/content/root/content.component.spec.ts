import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// angular material
import {
  MatDividerModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

// child
import {TodoListItemComponent} from '../todo-list-item';

// testing component
import {ContentComponent} from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
        TodoListItemComponent
      ],
      imports: [
        MatDividerModule,
        MatCheckboxModule,
        MatIconModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
