import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMspListComponent } from './user-msp-list.component';

describe('UserMspListComponent', () => {
  let component: UserMspListComponent;
  let fixture: ComponentFixture<UserMspListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMspListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMspListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
