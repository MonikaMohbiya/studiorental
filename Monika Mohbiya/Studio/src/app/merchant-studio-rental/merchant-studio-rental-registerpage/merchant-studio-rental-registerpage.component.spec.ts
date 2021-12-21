import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalRegisterpageComponent } from './merchant-studio-rental-registerpage.component';

describe('MerchantStudioRentalRegisterpageComponent', () => {
  let component: MerchantStudioRentalRegisterpageComponent;
  let fixture: ComponentFixture<MerchantStudioRentalRegisterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalRegisterpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalRegisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
