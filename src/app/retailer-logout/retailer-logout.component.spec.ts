import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerLogoutComponent } from './retailer-logout.component';

describe('RetailerLogoutComponent', () => {
  let component: RetailerLogoutComponent;
  let fixture: ComponentFixture<RetailerLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
