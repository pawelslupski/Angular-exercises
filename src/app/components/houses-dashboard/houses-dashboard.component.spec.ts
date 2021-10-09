import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesDashboardComponent } from './houses-dashboard.component';

describe('HousesDashboardComponent', () => {
  let component: HousesDashboardComponent;
  let fixture: ComponentFixture<HousesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
