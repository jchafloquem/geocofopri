import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPortalComponent } from './menu-portal.component';

describe('MenuPortalComponent', () => {
  let component: MenuPortalComponent;
  let fixture: ComponentFixture<MenuPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPortalComponent]
    });
    fixture = TestBed.createComponent(MenuPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
