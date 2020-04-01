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
      Title: 'Utils with relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Utils',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Utils',
          Name: 'Two',
          Type: 'number',
          Value: '',
        }
      ]
    },
    {
      Title: 'Utils without relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Utils',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Utils',
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
