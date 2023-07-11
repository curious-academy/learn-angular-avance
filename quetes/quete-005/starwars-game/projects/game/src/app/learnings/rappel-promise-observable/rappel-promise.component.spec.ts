import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelPromiseComponent } from './rappel-promise.component';

describe('RappelPromiseComponent', () => {
  let component: RappelPromiseComponent;
  let fixture: ComponentFixture<RappelPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RappelPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RappelPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
