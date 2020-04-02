import {Injectable} from '@angular/core';
import {Result} from '../data-classes/result';
import {Test} from '../data-classes/test';
import TestSave from '../data-classes/test-save';

@Injectable({
  providedIn: 'root',
})
export class FakeDbService {

  public AllRequest: TestSave[] =  [];

  constructor() {
  }

  public AddTest(results: Result[], test: Test) {
    let testType: string = test.Steps.length > 0 ? test.Title + ':' : test.Title;
    test.Steps.forEach(step => testType += (' [' + step.Name.toLowerCase() + ': ' + step.Value + ']'));
    this.AllRequest.push({
      Results: results,
      DateTime: new Date().toISOString(),
      TestType: testType,
    });
  }
}
