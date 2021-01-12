import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyRowActionsCustomComponent } from './msp-list-body-row-actions-custom.component';

describe('MspListBodyRowActionsCustomComponent', () => {
  let component: MspListBodyRowActionsCustomComponent;
  let fixture: ComponentFixture<MspListBodyRowActionsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyRowActionsCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyRowActionsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
