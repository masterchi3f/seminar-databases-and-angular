import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-delete',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class DeleteComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Delete all movies which contain a term',
      Path: '/delete/movies',
      Steps: [
        {
          Title: 'Fill out a containing term',
          Name: 'Term',
          Type: 'text',
          Value: '',
        }
      ]
    },
    {
      Title: 'Delete all movies with a language',
      Path: '/delete/withLang',
      Steps: [
        {
          Title: 'Fill out a language name',
          Name: 'Language name',
          Type: 'text',
          Value: '',
        }
      ]
    },
    {
      Title: 'Delete all movies with a genre',
      Path: '/delete/withGenre',
      Steps: [
        {
          Title: 'Fill out a genre name',
          Name: 'Genre name',
          Type: 'text',
          Value: '',
        }
      ]
    },
    {
      Title: 'Delete all companies through all movies which are spoken in a language',
      Path: '/delete/companyByLang',
      Steps: [
        {
          Title: 'Fill out a language name',
          Name: 'Language name',
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
