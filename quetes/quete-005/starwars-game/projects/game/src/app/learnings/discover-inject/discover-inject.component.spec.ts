import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverInjectComponent } from './discover-inject.component';

describe('DiscoverInjectComponent', () => {
  let component: DiscoverInjectComponent;
  let fixture: ComponentFixture<DiscoverInjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiscoverInjectComponent]
    });
    fixture = TestBed.createComponent(DiscoverInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
