import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazInicioComponent } from './interfaz-inicio.component';

describe('InterfazInicioComponent', () => {
  let component: InterfazInicioComponent;
  let fixture: ComponentFixture<InterfazInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
