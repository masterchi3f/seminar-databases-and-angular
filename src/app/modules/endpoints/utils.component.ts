import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-utils',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class UtilsComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Utils',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Utils',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: string[] = [
    'Utils with relations',
    'Utils without relations',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
