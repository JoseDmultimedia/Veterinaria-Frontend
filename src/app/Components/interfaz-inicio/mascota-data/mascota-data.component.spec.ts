import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaDataComponent } from './mascota-data.component';

describe('MascotaDataComponent', () => {
  let component: MascotaDataComponent;
  let fixture: ComponentFixture<MascotaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
