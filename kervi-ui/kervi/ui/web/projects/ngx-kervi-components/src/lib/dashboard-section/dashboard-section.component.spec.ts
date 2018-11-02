import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionComponent } from './dashboard-section.component';

describe('DashboardSectionComponent', () => {
  let component: DashboardSectionComponent;
  let fixture: ComponentFixture<DashboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
