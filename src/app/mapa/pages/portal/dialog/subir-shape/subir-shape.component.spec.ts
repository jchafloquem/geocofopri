import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirShapeComponent } from './subir-shape.component';

describe('SubirShapeComponent', () => {
  let component: SubirShapeComponent;
  let fixture: ComponentFixture<SubirShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirShapeComponent]
    });
    fixture = TestBed.createComponent(SubirShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
