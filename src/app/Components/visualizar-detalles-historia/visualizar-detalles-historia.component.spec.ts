import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDetallesHistoriaComponent } from './visualizar-detalles-historia.component';

describe('VisualizarDetallesHistoriaComponent', () => {
  let component: VisualizarDetallesHistoriaComponent;
  let fixture: ComponentFixture<VisualizarDetallesHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDetallesHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDetallesHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
