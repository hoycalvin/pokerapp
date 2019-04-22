import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcardPage } from './highcard.page';

describe('HighcardPage', () => {
  let component: HighcardPage;
  let fixture: ComponentFixture<HighcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
