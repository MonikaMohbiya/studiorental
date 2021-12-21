import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfpostComponent } from './mfpost.component';

describe('MfpostComponent', () => {
  let component: MfpostComponent;
  let fixture: ComponentFixture<MfpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
