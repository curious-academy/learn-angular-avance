import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsWithSharereplayComponent } from './obs-with-sharereplay.component';

describe('ObsWithSharereplayComponent', () => {
  let component: ObsWithSharereplayComponent;
  let fixture: ComponentFixture<ObsWithSharereplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsWithSharereplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsWithSharereplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
