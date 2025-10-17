import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayout } from './clean-layout';

describe('CleanLayout', () => {
  let component: CleanLayout;
  let fixture: ComponentFixture<CleanLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
