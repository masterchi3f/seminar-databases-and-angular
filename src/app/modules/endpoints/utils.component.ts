import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-utils',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class UtilsComponent implements OnInit {

  public Steps: Step[] = [
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
  ];

  public Tests: Test[] = [
    {
      Title: 'Utils with relations',
      Path: '/'
    },
    {
      Title: 'Utils without relations',
      Path: '/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
