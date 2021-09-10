import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetallesHistoriaComponent } from './agregar-detalles-historia.component';

describe('AgregarDetallesHistoriaComponent', () => {
  let component: AgregarDetallesHistoriaComponent;
  let fixture: ComponentFixture<AgregarDetallesHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDetallesHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDetallesHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
