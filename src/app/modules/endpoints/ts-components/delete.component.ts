import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-delete',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class DeleteComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Delete with relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Delete',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Delete',
          Name: 'Two',
          Type: 'number',
          Value: '',
        }
      ]
    },
    {
      Title: 'Delete without relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Delete',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Delete',
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
