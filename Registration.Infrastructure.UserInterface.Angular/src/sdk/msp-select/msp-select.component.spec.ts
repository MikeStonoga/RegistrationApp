import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspSelectComponent } from './msp-select.component';

describe('MspSelectComponent', () => {
  let component: MspSelectComponent;
  let fixture: ComponentFixture<MspSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
