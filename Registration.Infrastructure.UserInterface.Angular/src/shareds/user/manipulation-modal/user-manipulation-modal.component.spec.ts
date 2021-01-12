import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManipulationModalComponent } from './user-manipulation-modal.component';

describe('UserManipulationModalComponent', () => {
  let component: UserManipulationModalComponent;
  let fixture: ComponentFixture<UserManipulationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManipulationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManipulationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
