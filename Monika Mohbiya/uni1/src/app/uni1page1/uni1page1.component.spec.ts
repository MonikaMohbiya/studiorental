import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uni1page1Component } from './uni1page1.component';

describe('Uni1page1Component', () => {
  let component: Uni1page1Component;
  let fixture: ComponentFixture<Uni1page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uni1page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uni1page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
