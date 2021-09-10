import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDataComponent } from './usuario-data.component';

describe('UsuarioDataComponent', () => {
  let component: UsuarioDataComponent;
  let fixture: ComponentFixture<UsuarioDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
