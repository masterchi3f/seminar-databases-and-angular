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
      Title: 'Save with relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Save',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Save',
          Name: 'Two',
          Type: 'number',
          Value: '',
        }
      ]
    },
    {
      Title: 'Save without relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Save',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Save',
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
