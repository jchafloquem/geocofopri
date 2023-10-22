import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoveComponent } from './modal-move.component';

describe('ModalMoveComponent', () => {
  let component: ModalMoveComponent;
  let fixture: ComponentFixture<ModalMoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMoveComponent]
    });
    fixture = TestBed.createComponent(ModalMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
