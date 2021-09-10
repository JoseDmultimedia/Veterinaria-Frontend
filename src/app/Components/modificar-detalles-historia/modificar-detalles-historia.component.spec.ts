import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDetallesHistoriaComponent } from './modificar-detalles-historia.component';

describe('ModificarDetallesHistoriaComponent', () => {
  let component: ModificarDetallesHistoriaComponent;
  let fixture: ComponentFixture<ModificarDetallesHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDetallesHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDetallesHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
