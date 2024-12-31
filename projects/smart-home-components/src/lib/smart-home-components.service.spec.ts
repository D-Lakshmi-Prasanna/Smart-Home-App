import { TestBed } from '@angular/core/testing';

import { SmartHomeComponentsService } from './smart-home-components.service';

describe('SmartHomeComponentsService', () => {
  let service: SmartHomeComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartHomeComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
