import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspButtonComponent } from './msp-button.component';

describe('MspButtonComponent', () => {
  let component: MspButtonComponent;
  let fixture: ComponentFixture<MspButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
