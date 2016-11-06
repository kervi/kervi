/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SensorsComponent } from './sensors.component';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
