import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKerviComponentsComponent } from './ngx-kervi-components.component';

describe('NgxKerviComponentsComponent', () => {
  let component: NgxKerviComponentsComponent;
  let fixture: ComponentFixture<NgxKerviComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxKerviComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKerviComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
