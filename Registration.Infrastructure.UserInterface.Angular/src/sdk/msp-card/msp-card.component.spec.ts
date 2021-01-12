import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspCardComponent } from './msp-card.component';

describe('MspCardComponent', () => {
  let component: MspCardComponent;
  let fixture: ComponentFixture<MspCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
