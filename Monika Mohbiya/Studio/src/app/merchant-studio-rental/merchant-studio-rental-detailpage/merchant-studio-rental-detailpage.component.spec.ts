import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalDetailpageComponent } from './merchant-studio-rental-detailpage.component';

describe('MerchantStudioRentalDetailpageComponent', () => {
  let component: MerchantStudioRentalDetailpageComponent;
  let fixture: ComponentFixture<MerchantStudioRentalDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
