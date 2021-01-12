import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListHeaderComponent } from './msp-list-header.component';

describe('MspListHeaderComponent', () => {
  let component: MspListHeaderComponent;
  let fixture: ComponentFixture<MspListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
