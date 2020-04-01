import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-delete',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class DeleteComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Delete',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Delete',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: string[] = [
    'Delete with relations',
    'Delete without relations',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
