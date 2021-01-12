import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyRowActionsUpdateComponent } from './msp-list-body-row-actions-update.component';

describe('MspListBodyRowActionsUpdateComponent', () => {
  let component: MspListBodyRowActionsUpdateComponent;
  let fixture: ComponentFixture<MspListBodyRowActionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyRowActionsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyRowActionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
