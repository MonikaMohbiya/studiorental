import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalAboutUsComponent } from './merchant-studio-rental-about-us.component';

describe('MerchantStudioRentalAboutUsComponent', () => {
  let component: MerchantStudioRentalAboutUsComponent;
  let fixture: ComponentFixture<MerchantStudioRentalAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
