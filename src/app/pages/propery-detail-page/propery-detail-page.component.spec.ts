import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyDetailPageComponent } from './propery-detail-page.component';

describe('ProperyDetailPageComponent', () => {
  let component: ProperyDetailPageComponent;
  let fixture: ComponentFixture<ProperyDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProperyDetailPageComponent]
    });
    fixture = TestBed.createComponent(ProperyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
