import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-save',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class SaveComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Save a number of movies and all related entries',
      Path: '/save/withRelations/',
      Steps: [
        {
          Title: 'Fill out a number',
          Name: 'Number',
          Type: 'number',
          Value: '',
        }
      ]
    },
    {
      Title: 'Save only a number of movies',
      Path: '/save/noRelations/',
      Steps: [
        {
          Title: 'Fill out a number',
          Name: 'Number',
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
