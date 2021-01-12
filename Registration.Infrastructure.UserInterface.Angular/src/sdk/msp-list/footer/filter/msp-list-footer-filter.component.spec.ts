import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListFooterFilterComponent } from './msp-list-footer-filter.component';

describe('MspListFooterFilterComponent', () => {
  let component: MspListFooterFilterComponent;
  let fixture: ComponentFixture<MspListFooterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListFooterFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListFooterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
