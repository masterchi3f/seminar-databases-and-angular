import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-delete',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class DeleteComponent implements OnInit {

  public Steps: Step[] = [
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
  ];

  public Tests: Test[] = [
    {
      Title: 'Delete with relations',
      Path: '/'
    },
    {
      Title: 'Delete without relations',
      Path: '/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
