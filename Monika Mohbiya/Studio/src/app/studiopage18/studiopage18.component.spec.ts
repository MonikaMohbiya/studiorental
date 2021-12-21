import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studiopage18Component } from './studiopage18.component';

describe('Studiopage18Component', () => {
  let component: Studiopage18Component;
  let fixture: ComponentFixture<Studiopage18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studiopage18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Studiopage18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
