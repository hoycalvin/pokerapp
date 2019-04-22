import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightPage } from './straight.page';

describe('StraightPage', () => {
  let component: StraightPage;
  let fixture: ComponentFixture<StraightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
