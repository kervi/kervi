/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DynamicNumberComponent } from './number-value.component';

describe('ControllerNumberInputComponent', () => {
  let component: DynamicNumberComponent;
  let fixture: ComponentFixture<DynamicNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicNumberComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
