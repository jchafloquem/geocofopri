import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabContainerTopComponent } from './fab-container-top.component';

describe('FabContainerTopComponent', () => {
  let component: FabContainerTopComponent;
  let fixture: ComponentFixture<FabContainerTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabContainerTopComponent]
    });
    fixture = TestBed.createComponent(FabContainerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
