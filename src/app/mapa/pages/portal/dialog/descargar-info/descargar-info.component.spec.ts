import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarInfoComponent } from './descargar-info.component';

describe('DescargarInfoComponent', () => {
  let component: DescargarInfoComponent;
  let fixture: ComponentFixture<DescargarInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescargarInfoComponent]
    });
    fixture = TestBed.createComponent(DescargarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
