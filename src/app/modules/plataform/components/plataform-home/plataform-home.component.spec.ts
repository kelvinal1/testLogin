import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformHomeComponent } from './plataform-home.component';

describe('PlataformHomeComponent', () => {
  let component: PlataformHomeComponent;
  let fixture: ComponentFixture<PlataformHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformHomeComponent]
    });
    fixture = TestBed.createComponent(PlataformHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
