import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListHeaderColumnsFiltersComponent } from './msp-list-header-columns-filters.component';

describe('MspListHeaderColumnsFiltersComponent', () => {
  let component: MspListHeaderColumnsFiltersComponent;
  let fixture: ComponentFixture<MspListHeaderColumnsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListHeaderColumnsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListHeaderColumnsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
