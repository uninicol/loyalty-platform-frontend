import {TestBed} from '@angular/core/testing';

import {CampaignsCardsService} from './campaigns-cards.service';

describe('CampaignsCardsService', () => {
  let service: CampaignsCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignsCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
