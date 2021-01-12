import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListHeaderColumnsFiltersCleanButtonComponent } from './msp-list-header-columns-filters-clean-button.component';

describe('MspListHeaderColumnsFiltersCleanButtonComponent', () => {
  let component: MspListHeaderColumnsFiltersCleanButtonComponent;
  let fixture: ComponentFixture<MspListHeaderColumnsFiltersCleanButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListHeaderColumnsFiltersCleanButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListHeaderColumnsFiltersCleanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
