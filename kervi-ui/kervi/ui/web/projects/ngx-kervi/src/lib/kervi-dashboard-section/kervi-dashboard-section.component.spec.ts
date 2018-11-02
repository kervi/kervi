import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerviDashboardSectionComponent } from './kervi-dashboard-section.component';

describe('KerviDashboardSectionComponent', () => {
  let component: KerviDashboardSectionComponent;
  let fixture: ComponentFixture<KerviDashboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerviDashboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerviDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
