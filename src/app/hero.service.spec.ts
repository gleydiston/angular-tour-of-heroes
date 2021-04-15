import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { HeroService } from './herois/hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
