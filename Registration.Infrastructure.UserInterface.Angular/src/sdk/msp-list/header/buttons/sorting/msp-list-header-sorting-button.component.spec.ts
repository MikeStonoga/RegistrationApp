import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListHeaderSortingButtonComponent } from './msp-list-header-sorting-button.component';

describe('MspListHeaderSortingButtonComponent', () => {
  let component: MspListHeaderSortingButtonComponent;
  let fixture: ComponentFixture<MspListHeaderSortingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListHeaderSortingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListHeaderSortingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
