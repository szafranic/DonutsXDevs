import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamouspersondetailComponent } from './famouspersondetail.component';

describe('FamouspersondetailComponent', () => {
  let component: FamouspersondetailComponent;
  let fixture: ComponentFixture<FamouspersondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamouspersondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamouspersondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
