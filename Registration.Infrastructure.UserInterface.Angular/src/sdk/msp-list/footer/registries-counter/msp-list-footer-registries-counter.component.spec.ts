import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListFooterRegistriesCounterComponent } from './msp-list-footer-registries-counter.component';

describe('MspListFooterRegistriesCounterComponent', () => {
  let component: MspListFooterRegistriesCounterComponent;
  let fixture: ComponentFixture<MspListFooterRegistriesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListFooterRegistriesCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListFooterRegistriesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
