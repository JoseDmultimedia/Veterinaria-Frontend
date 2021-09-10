import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHistoriaComponent } from './detalles-historia.component';

describe('DetallesHistoriaComponent', () => {
  let component: DetallesHistoriaComponent;
  let fixture: ComponentFixture<DetallesHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
