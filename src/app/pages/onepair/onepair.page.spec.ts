import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepairPage } from './onepair.page';

describe('OnepairPage', () => {
  let component: OnepairPage;
  let fixture: ComponentFixture<OnepairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
