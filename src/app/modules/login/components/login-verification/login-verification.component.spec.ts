import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVerificationComponent } from './login-verification.component';

describe('LoginVerificationComponent', () => {
  let component: LoginVerificationComponent;
  let fixture: ComponentFixture<LoginVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVerificationComponent]
    });
    fixture = TestBed.createComponent(LoginVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
