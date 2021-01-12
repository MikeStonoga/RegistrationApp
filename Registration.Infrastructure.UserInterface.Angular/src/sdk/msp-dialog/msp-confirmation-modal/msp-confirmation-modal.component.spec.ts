import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspConfirmationModalComponent } from './msp-confirmation-modal.component';

describe('MspConfirmationModalComponent', () => {
  let component: MspConfirmationModalComponent;
  let fixture: ComponentFixture<MspConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspConfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
