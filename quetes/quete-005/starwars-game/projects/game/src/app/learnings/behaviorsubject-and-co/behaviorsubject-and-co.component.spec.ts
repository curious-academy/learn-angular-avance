import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectAndCoComponent } from './behaviorsubject-and-co.component';

describe('BehaviorsubjectAndCoComponent', () => {
  let component: BehaviorsubjectAndCoComponent;
  let fixture: ComponentFixture<BehaviorsubjectAndCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorsubjectAndCoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorsubjectAndCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
