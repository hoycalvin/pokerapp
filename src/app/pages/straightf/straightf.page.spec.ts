import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightfPage } from './straightf.page';

describe('StraightfPage', () => {
  let component: StraightfPage;
  let fixture: ComponentFixture<StraightfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
