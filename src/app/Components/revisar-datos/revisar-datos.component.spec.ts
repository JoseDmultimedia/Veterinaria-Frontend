import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarDatosComponent } from './revisar-datos.component';

describe('RevisarDatosComponent', () => {
  let component: RevisarDatosComponent;
  let fixture: ComponentFixture<RevisarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
