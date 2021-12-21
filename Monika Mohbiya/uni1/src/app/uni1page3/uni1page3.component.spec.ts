import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uni1page3Component } from './uni1page3.component';

describe('Uni1page3Component', () => {
  let component: Uni1page3Component;
  let fixture: ComponentFixture<Uni1page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uni1page3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uni1page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
