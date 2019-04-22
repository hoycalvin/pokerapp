import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullhousePage } from './fullhouse.page';

describe('FullhousePage', () => {
  let component: FullhousePage;
  let fixture: ComponentFixture<FullhousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullhousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
