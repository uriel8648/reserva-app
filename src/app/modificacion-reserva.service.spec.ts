import { TestBed } from '@angular/core/testing';

import { ModificacionReservaService } from './modificacion-reserva.service';

describe('ModificacionReservaService', () => {
  let service: ModificacionReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificacionReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
