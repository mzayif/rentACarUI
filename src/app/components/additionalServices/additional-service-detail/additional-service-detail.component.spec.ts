import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalServiceDetailComponent } from './additional-service-detail.component';

describe('AdditionalServiceDetailComponent', () => {
  let component: AdditionalServiceDetailComponent;
  let fixture: ComponentFixture<AdditionalServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalServiceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
