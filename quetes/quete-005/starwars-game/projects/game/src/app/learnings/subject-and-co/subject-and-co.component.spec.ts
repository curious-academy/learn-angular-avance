import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndCoComponent } from './subject-and-co.component';

describe('SubjectAndCoComponent', () => {
  let component: SubjectAndCoComponent;
  let fixture: ComponentFixture<SubjectAndCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SubjectAndCoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAndCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
