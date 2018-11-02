import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerviControllerPadComponent } from './kervi-controller-pad.component';

describe('KerviControllerPadComponent', () => {
  let component: KerviControllerPadComponent;
  let fixture: ComponentFixture<KerviControllerPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerviControllerPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerviControllerPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
