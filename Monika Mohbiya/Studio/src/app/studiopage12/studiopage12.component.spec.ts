import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studiopage12Component } from './studiopage12.component';

describe('Studiopage12Component', () => {
  let component: Studiopage12Component;
  let fixture: ComponentFixture<Studiopage12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studiopage12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Studiopage12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
