import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamViewerComponent } from './cam-viewer.component';

describe('CamViewerComponent', () => {
  let component: CamViewerComponent;
  let fixture: ComponentFixture<CamViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
