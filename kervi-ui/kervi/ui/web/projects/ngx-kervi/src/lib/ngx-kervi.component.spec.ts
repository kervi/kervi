import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKerviComponent } from './ngx-kervi.component';

describe('NgxKerviComponent', () => {
  let component: NgxKerviComponent;
  let fixture: ComponentFixture<NgxKerviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxKerviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKerviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
