import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspInputComponent } from './msp-input.component';

describe('MspInputComponent', () => {
  let component: MspInputComponent;
  let fixture: ComponentFixture<MspInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
