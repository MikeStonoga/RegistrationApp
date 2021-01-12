import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspDatepickerComponent } from './msp-datepicker.component';

describe('MspDatepickerComponent', () => {
  let component: MspDatepickerComponent;
  let fixture: ComponentFixture<MspDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
