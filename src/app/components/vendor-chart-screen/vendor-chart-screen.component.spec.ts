import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorChartScreenComponent } from './vendor-chart-screen.component';

describe('VendorChartScreenComponent', () => {
  let component: VendorChartScreenComponent;
  let fixture: ComponentFixture<VendorChartScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorChartScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorChartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
