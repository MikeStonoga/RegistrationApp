import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyRowActionsDeleteComponent } from './msp-list-body-row-actions-delete.component';

describe('MspListBodyRowActionsDeleteComponent', () => {
  let component: MspListBodyRowActionsDeleteComponent;
  let fixture: ComponentFixture<MspListBodyRowActionsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyRowActionsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyRowActionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
