import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSegmentComponent } from './car-segment.component';

describe('CarSegmentComponent', () => {
  let component: CarSegmentComponent;
  let fixture: ComponentFixture<CarSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
