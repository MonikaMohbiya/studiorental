import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalLandingpageComponent } from './merchant-studio-rental-landingpage.component';

describe('MerchantStudioRentalLandingpageComponent', () => {
  let component: MerchantStudioRentalLandingpageComponent;
  let fixture: ComponentFixture<MerchantStudioRentalLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalLandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
