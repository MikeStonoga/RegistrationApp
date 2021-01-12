import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspIconComponent } from './msp-icon.component';

describe('MspIconComponent', () => {
  let component: MspIconComponent;
  let fixture: ComponentFixture<MspIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
