import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteReservaComponent } from './ajuste-reserva.component';

describe('AjusteReservaComponent', () => {
  let component: AjusteReservaComponent;
  let fixture: ComponentFixture<AjusteReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjusteReservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjusteReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
