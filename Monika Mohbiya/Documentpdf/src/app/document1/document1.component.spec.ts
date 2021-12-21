import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Document1Component } from './document1.component';

describe('Document1Component', () => {
  let component: Document1Component;
  let fixture: ComponentFixture<Document1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Document1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Document1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
