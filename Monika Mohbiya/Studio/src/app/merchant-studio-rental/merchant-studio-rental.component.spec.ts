import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStudioRentalComponent } from './merchant-studio-rental.component';

describe('MerchantStudioRentalComponent', () => {
  let component: MerchantStudioRentalComponent;
  let fixture: ComponentFixture<MerchantStudioRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStudioRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStudioRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
