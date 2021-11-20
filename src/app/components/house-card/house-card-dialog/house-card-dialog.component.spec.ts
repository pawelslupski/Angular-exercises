import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardDialogComponent } from './house-card-dialog.component';

describe('HouseCardDialogComponent', () => {
  let component: HouseCardDialogComponent;
  let fixture: ComponentFixture<HouseCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
