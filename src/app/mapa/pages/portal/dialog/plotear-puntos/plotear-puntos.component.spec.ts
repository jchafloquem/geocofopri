import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotearPuntosComponent } from './plotear-puntos.component';

describe('PlotearPuntosComponent', () => {
  let component: PlotearPuntosComponent;
  let fixture: ComponentFixture<PlotearPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotearPuntosComponent]
    });
    fixture = TestBed.createComponent(PlotearPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
