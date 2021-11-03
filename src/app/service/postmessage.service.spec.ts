import { TestBed } from '@angular/core/testing';

import { PostmessageService } from './postmessage.service';

describe('PostmessageService', () => {
  let service: PostmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
