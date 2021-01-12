import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsGridComponent } from './user-cards-grid.component';

describe('UserCardsGridComponent', () => {
  let component: UserCardsGridComponent;
  let fixture: ComponentFixture<UserCardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
