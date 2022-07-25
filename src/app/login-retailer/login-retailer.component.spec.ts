import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRetailerComponent } from './login-retailer.component';

describe('LoginRetailerComponent', () => {
  let component: LoginRetailerComponent;
  let fixture: ComponentFixture<LoginRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
