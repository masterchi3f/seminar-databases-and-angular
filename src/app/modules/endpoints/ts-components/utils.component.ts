import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-utils',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class UtilsComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Search all movies',
      Path: '/utils/movies',
      Steps: []
    },
    {
      Title: 'Search all companies',
      Path: '/utils/companies',
      Steps: []
    }/*,
    {
      Title: 'Search all movies which contain a term',
      Path: '/utils/movies',
      Steps: [
        {
          Title: 'Fill out a containing term',
          Name: 'Term',
          Type: 'text',
          Value: '',
        }
      ]
    }*/
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
