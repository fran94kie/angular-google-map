import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRecordsComponent } from './map-records.component';

describe('MapRecordsComponent', () => {
  let component: MapRecordsComponent;
  let fixture: ComponentFixture<MapRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapRecordsComponent]
    });
    fixture = TestBed.createComponent(MapRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
