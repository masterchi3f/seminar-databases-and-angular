import {Injectable} from '@angular/core';
import {Result}     from '../data-classes/result';
import {Test}       from '../data-classes/test';
import TestSave     from '../data-classes/test-save';

@Injectable({
  providedIn: 'root',
})
export class FakeDbService {

  public AllRequest: TestSave[] =  [];

  constructor() {
  }

  public AddTest(results: Result[], test: Test) {
    this.AllRequest.push({
      Results: results,
      DateTime: new Date().toISOString(),
      TestType: test.Title,
    });
  }
}
