import {Component, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';

@Component({
  selector: 'app-search',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss'],
})
export class SearchComponent implements OnInit {

  public Steps: Step[] = [
    {
      Title: 'Step One Search',
      Type: 'text',
      Value: '',
    },
    {
      Title: 'Step Two Search',
      Type: 'number',
      Value: '',
    }
  ];

  public Tests: string[] = [
    'Search with relations',
    'Search without relations',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
