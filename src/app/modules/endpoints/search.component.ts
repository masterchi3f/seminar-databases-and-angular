import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-search',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class SearchComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Search',
      Name: 'One',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Search',
      Name: 'Two',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: Test[] = [
    {
      Title: 'Search with relations',
      Path: '/'
    },
    {
      Title: 'Search without relations',
      Path: '/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
