import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarMapaComponent } from './generar-mapa.component';

describe('GenerarMapaComponent', () => {
  let component: GenerarMapaComponent;
  let fixture: ComponentFixture<GenerarMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarMapaComponent]
    });
    fixture = TestBed.createComponent(GenerarMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
