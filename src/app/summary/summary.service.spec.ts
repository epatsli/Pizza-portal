import {TestBed, inject} from '@angular/core/testing';

import {SummaryService} from './summary.service';

xdescribe('SummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryService]
    });
  });

  it('should be created', inject([SummaryService], (service: SummaryService) => {
    expect(service).toBeTruthy();
  }));
});
