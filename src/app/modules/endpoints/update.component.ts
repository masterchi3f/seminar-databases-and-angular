import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-update',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class UpdateComponent implements OnInit {

  public Steps: Step[] = [
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
  ];

  public Tests: Test[] = [
    {
      Title: 'Update with relations',
      Path: '/'
    },
    {
      Title: 'Update without relations',
      Path: '/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  StartTest() {

  }

}
