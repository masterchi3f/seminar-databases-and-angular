import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-save',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class SaveComponent implements OnInit {

  public Steps: Step[] = [
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
  ];

  public Tests: Test[] = [
    {
      Title: 'Save with relations',
      Path: '/'
    },
    {
      Title: 'Save without relations',
      Path: '/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
