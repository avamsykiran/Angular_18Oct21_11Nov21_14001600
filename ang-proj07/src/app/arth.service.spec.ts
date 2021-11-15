import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#sum',()=>{
    it('should return positve given two postives',()=>{
      expect(service.sum(2,2)).toBe(4);
    });
    it('should return the non-zero arg given zero as one of the args',()=>{
      expect(service.sum(2,0)).toBe(2);
    });
    it('should return difference given a postive and a negative',()=>{
      expect(service.sum(2,-2)).toBe(0);
    });
  });

  describe('#product',()=>{
    it('should return positve given two postives',()=>{
      expect(service.product(2,2)).toBe(4);
    });
    it('should return the zero given zero as one of the args',()=>{
      expect(service.product(2,0)).toBe(0);
    });
    it('should return negative given a postive and a negative',()=>{
      expect(service.product(2,-2)).toBe(-4);
    });
    it('should return postive given both negatives',()=>{
      expect(service.product(-2,-2)).toBe(4);
    });
  });
});
