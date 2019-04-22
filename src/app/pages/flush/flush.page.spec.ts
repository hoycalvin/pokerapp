import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlushPage } from './flush.page';

describe('FlushPage', () => {
  let component: FlushPage;
  let fixture: ComponentFixture<FlushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
