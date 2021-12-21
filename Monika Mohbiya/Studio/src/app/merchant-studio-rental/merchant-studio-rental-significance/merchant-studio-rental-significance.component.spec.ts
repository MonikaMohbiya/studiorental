import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalSignificanceComponent } from './merchant-studio-rental-significance.component';

describe('MerchantStudioRentalSignificanceComponent', () => {
  let component: MerchantStudioRentalSignificanceComponent;
  let fixture: ComponentFixture<MerchantStudioRentalSignificanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalSignificanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalSignificanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
