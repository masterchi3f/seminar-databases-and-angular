import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-update',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class UpdateComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Update',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Update',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: string[] = [
    'Update with relations',
    'Update without relations',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
