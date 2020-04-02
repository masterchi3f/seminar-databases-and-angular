import {Component, OnInit} from '@angular/core';
import {Test} from '../../../data-classes/test';

@Component({
  selector: 'app-search',
  templateUrl: '../endpoints.component.html',
  styleUrls: ['../endpoints.component.scss'],
})
export class SearchComponent implements OnInit {

  public Tests: Test[] = [
    {
      Title: 'Search all movies which contain a term',
      Path: '/search/movies',
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
      Title: 'Search all movies with a language',
      Path: '/search/withLang',
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
      Title: 'Search all movies with a genre',
      Path: '/search/withGenre',
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
      Title: 'Search all companies through all movies which are spoken in a language',
      Path: '/search/compLang',
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
      Title: 'Search for the sum of the budget of all movies from a company',
      Path: '/search/budget',
      Steps: [
        {
          Title: 'Fill out a company name',
          Name: 'Company name',
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
