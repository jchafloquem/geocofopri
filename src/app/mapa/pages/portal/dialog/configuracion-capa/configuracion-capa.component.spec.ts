import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCapaComponent } from './configuracion-capa.component';

describe('ConfiguracionCapaComponent', () => {
  let component: ConfiguracionCapaComponent;
  let fixture: ComponentFixture<ConfiguracionCapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionCapaComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
