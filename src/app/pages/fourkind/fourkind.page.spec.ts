import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourkindPage } from './fourkind.page';

describe('FourkindPage', () => {
  let component: FourkindPage;
  let fixture: ComponentFixture<FourkindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourkindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourkindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
