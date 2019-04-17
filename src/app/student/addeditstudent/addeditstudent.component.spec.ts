import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstudentComponent } from './addeditstudent.component';

describe('AddeditstudentComponent', () => {
  let component: AddeditstudentComponent;
  let fixture: ComponentFixture<AddeditstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
