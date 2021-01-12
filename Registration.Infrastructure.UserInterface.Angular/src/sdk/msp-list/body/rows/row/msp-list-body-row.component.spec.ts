import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListBodyRowComponent } from './msp-list-body-row.component';

describe('MspListBodyRowComponent', () => {
  let component: MspListBodyRowComponent;
  let fixture: ComponentFixture<MspListBodyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListBodyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListBodyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
