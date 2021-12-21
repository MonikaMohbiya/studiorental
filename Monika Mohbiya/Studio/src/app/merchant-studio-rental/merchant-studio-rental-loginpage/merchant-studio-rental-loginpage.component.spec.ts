import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalLoginpageComponent } from './merchant-studio-rental-loginpage.component';

describe('MerchantStudioRentalLoginpageComponent', () => {
  let component: MerchantStudioRentalLoginpageComponent;
  let fixture: ComponentFixture<MerchantStudioRentalLoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalLoginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
