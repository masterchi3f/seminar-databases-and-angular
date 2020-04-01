import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two',
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
