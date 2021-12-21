import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uni1page2Component } from './uni1page2.component';

describe('Uni1page2Component', () => {
  let component: Uni1page2Component;
  let fixture: ComponentFixture<Uni1page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uni1page2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uni1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
