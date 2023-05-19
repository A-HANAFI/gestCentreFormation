import { TestBed } from '@angular/core/testing';

import { BasicAuthLoginService } from './basic-authLogin.service';

describe('BasicAuthloginService', () => {
  let service: BasicAuthloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
