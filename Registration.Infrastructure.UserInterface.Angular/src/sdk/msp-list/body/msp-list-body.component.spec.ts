import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyComponent } from './msp-list-body.component';

describe('MspListBodyComponent', () => {
  let component: MspListBodyComponent;
  let fixture: ComponentFixture<MspListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
