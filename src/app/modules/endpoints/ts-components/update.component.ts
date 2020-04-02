import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-update',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class UpdateComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Update all movies which contain a term with another term',
      Path: '/update/replace/',
      Steps: [
        {
          Title: 'Fill out the replace term',
          Name: 'New term',
          Type: 'text',
          Value: '',
        },
        {
          Title: 'Fill out the replaced term',
          Name: 'Old term',
          Type: 'text',
          Value: '',
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
