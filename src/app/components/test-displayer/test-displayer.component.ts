import {Component, Input, OnInit} from '@angular/core';
import {Step} from '../../data-classes/step';
import {Result} from '../../data-classes/result';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-displayer',
  templateUrl: './test-displayer.component.html',
  styleUrls: ['./test-displayer.component.scss'],
})
export class TestDisplayerComponent implements OnInit {

  public SelectedTest: string;

  @Input()
  public Tests: string[];

  @Input()
  public Steps: Step[];

  router: Router;

  public Results: Result[] = [
    {Name: 'MariaDB', Loading: true, Content: 'Empty'},
    {Name: 'MongoDB', Loading: false, Content: 'Empty'},
    {Name: 'Neo4J', Loading: true, Content: 'Empty'}
  ];

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
  }

  public StartTest() {
    console.log(this.Steps);
  }

}
