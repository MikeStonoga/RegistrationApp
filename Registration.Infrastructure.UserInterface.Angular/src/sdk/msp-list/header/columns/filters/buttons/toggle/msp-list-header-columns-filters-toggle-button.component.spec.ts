import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListHeaderColumnsFiltersToggleButtonComponent } from './msp-list-header-columns-filters-toggle-button.component';

describe('MspListHeaderColumnsFiltersToggleButtonComponent', () => {
  let component: MspListHeaderColumnsFiltersToggleButtonComponent;
  let fixture: ComponentFixture<MspListHeaderColumnsFiltersToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListHeaderColumnsFiltersToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListHeaderColumnsFiltersToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
