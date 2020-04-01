import {Component, OnInit} from '@angular/core';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-update',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class UpdateComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Update with relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Update',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Update',
          Name: 'Two',
          Type: 'number',
          Value: '',
        }
      ]
    },
    {
      Title: 'Update without relations',
      Path: '/',
      Steps: [
        {
          Title: 'Step One Update',
          Name: 'One',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Step Two Update',
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
