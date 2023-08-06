import { TestBed } from '@angular/core/testing';

import { GlycemieserviceService } from './glycemieservice.service';

describe('GlycemieserviceService', () => {
  let service: GlycemieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlycemieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
