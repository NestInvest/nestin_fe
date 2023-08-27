import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCardComponent } from './n-card.component';

describe('NCardComponent', () => {
  let component: NCardComponent;
  let fixture: ComponentFixture<NCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NCardComponent]
    });
    fixture = TestBed.createComponent(NCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
