import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMspCardComponent } from './user-msp-card.component';

describe('UserMspCardComponent', () => {
  let component: UserMspCardComponent;
  let fixture: ComponentFixture<UserMspCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMspCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMspCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
