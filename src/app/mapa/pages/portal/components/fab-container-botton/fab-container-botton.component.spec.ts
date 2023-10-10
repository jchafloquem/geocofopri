import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabContainerBottonComponent } from './fab-container-botton.component';

describe('FabContainerBottonComponent', () => {
  let component: FabContainerBottonComponent;
  let fixture: ComponentFixture<FabContainerBottonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabContainerBottonComponent]
    });
    fixture = TestBed.createComponent(FabContainerBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
