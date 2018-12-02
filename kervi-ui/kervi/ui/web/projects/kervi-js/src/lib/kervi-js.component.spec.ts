import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerviJsComponent } from './kervi-js.component';

describe('KerviJsComponent', () => {
  let component: KerviJsComponent;
  let fixture: ComponentFixture<KerviJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerviJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerviJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
