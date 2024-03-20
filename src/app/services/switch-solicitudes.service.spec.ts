import { TestBed } from '@angular/core/testing';

import { SwitchSolicitudesService } from './switch-solicitudes.service';

describe('SwitchSolicitudesService', () => {
  let service: SwitchSolicitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchSolicitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
