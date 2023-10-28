import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroUbigeoComponent } from './filtro-ubigeo.component';

describe('FiltroUbigeoComponent', () => {
  let component: FiltroUbigeoComponent;
  let fixture: ComponentFixture<FiltroUbigeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroUbigeoComponent]
    });
    fixture = TestBed.createComponent(FiltroUbigeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
