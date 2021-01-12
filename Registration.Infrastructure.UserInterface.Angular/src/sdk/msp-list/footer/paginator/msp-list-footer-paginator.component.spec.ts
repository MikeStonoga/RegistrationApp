import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListFooterPaginatorComponent } from './msp-list-footer-paginator.component';

describe('MspListFooterPaginatorComponent', () => {
  let component: MspListFooterPaginatorComponent;
  let fixture: ComponentFixture<MspListFooterPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListFooterPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListFooterPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
