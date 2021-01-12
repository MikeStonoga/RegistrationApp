import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspListFooterComponent } from './msp-list-footer.component';

describe('MspListFooterComponent', () => {
  let component: MspListFooterComponent;
  let fixture: ComponentFixture<MspListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspListFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
