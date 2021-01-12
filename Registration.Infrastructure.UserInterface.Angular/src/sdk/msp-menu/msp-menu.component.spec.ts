import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspMenuComponent } from './msp-menu.component';

describe('MspMenuComponent', () => {
  let component: MspMenuComponent;
  let fixture: ComponentFixture<MspMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
