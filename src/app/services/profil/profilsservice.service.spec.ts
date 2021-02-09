import { TestBed } from '@angular/core/testing';

import { ProfilsserviceService } from './profilsservice.service';

describe('ProfilsserviceService', () => {
  let service: ProfilsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
