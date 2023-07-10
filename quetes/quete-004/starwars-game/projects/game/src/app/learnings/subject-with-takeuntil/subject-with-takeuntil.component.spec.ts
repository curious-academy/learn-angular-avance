import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectWithTakeuntilComponent } from './subject-with-takeuntil.component';

describe('SubjectWithTakeuntilComponent', () => {
  let component: SubjectWithTakeuntilComponent;
  let fixture: ComponentFixture<SubjectWithTakeuntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectWithTakeuntilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectWithTakeuntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
