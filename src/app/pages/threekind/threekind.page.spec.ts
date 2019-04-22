import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreekindPage } from './threekind.page';

describe('ThreekindPage', () => {
  let component: ThreekindPage;
  let fixture: ComponentFixture<ThreekindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreekindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreekindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
