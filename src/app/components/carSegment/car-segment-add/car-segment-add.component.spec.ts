import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSegmentAddComponent } from './car-segment-add.component';

describe('CarSegmentAddComponent', () => {
  let component: CarSegmentAddComponent;
  let fixture: ComponentFixture<CarSegmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSegmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSegmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
