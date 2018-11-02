import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerviCamViewerComponent } from './kervi-cam-viewer.component';

describe('KerviCamViewerComponent', () => {
  let component: KerviCamViewerComponent;
  let fixture: ComponentFixture<KerviCamViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerviCamViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerviCamViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
