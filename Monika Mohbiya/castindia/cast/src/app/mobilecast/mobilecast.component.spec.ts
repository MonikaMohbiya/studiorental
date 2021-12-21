import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecastComponent } from './mobilecast.component';

describe('MobilecastComponent', () => {
  let component: MobilecastComponent;
  let fixture: ComponentFixture<MobilecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
