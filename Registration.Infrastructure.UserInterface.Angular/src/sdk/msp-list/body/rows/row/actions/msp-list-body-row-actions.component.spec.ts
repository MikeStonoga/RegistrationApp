import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyRowActionsComponent } from './msp-list-body-row-actions.component';

describe('MspListBodyRowActionsComponent', () => {
  let component: MspListBodyRowActionsComponent;
  let fixture: ComponentFixture<MspListBodyRowActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyRowActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyRowActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
