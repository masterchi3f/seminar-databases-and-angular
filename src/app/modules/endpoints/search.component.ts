import {Component, OnInit} from '@angular/core';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-search',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class SearchComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Search with relations',
      Path: '/',
      Steps: [
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
      ]
    },
    {
      Title: 'Search without relations',
      Path: '/',
      Steps: [
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
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
