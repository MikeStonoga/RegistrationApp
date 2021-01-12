import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspCreationButtonComponent } from './msp-creation-button.component';

describe('MspCreationButtonComponent', () => {
  let component: MspCreationButtonComponent;
  let fixture: ComponentFixture<MspCreationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspCreationButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspCreationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
