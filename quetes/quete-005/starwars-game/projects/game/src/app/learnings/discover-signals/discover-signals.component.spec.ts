import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSignalsComponent } from './discover-signals.component';

describe('DiscoverSignalsComponent', () => {
  let component: DiscoverSignalsComponent;
  let fixture: ComponentFixture<DiscoverSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiscoverSignalsComponent]
    });
    fixture = TestBed.createComponent(DiscoverSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
