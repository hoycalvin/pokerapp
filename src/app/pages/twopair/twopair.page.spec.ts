import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwopairPage } from './twopair.page';

describe('TwopairPage', () => {
  let component: TwopairPage;
  let fixture: ComponentFixture<TwopairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwopairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwopairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
