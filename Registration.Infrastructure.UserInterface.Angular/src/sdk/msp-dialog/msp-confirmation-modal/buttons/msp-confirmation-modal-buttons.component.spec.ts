import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspConfirmationModalButtonsComponent } from './msp-confirmation-modal-buttons.component';

describe('MspConfirmationModalButtonsComponent', () => {
  let component: MspConfirmationModalButtonsComponent;
  let fixture: ComponentFixture<MspConfirmationModalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspConfirmationModalButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspConfirmationModalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
