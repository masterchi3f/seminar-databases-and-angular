import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-save',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class SaveComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Save',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Save',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: string[] = [
    'Save with relations',
    'Save without relations',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
