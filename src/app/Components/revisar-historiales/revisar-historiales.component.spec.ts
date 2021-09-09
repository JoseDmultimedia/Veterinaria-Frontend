import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarHistorialesComponent } from './revisar-historiales.component';

describe('RevisarHistorialesComponent', () => {
  let component: RevisarHistorialesComponent;
  let fixture: ComponentFixture<RevisarHistorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarHistorialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarHistorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
