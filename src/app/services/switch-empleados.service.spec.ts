import { TestBed } from '@angular/core/testing';

import { SwitchEmpleadosService } from './switch-empleados.service';

describe('SwitchEmpleadosService', () => {
  let service: SwitchEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
