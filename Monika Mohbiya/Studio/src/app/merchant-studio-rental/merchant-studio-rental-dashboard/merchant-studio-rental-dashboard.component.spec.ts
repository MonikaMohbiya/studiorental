import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalDashboardComponent } from './merchant-studio-rental-dashboard.component';

describe('MerchantStudioRentalDashboardComponent', () => {
  let component: MerchantStudioRentalDashboardComponent;
  let fixture: ComponentFixture<MerchantStudioRentalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
