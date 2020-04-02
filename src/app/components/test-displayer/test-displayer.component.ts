import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../data-classes/result';
import {Router} from '@angular/router';
import {Test} from '../../data-classes/test';

@Component({
  selector: 'app-test-displayer',
  templateUrl: './test-displayer.component.html',
  styleUrls: ['./test-displayer.component.scss'],
})
export class TestDisplayerComponent implements OnInit {

  constructor(_router: Router) {
    this.router = _router;
  }

  public static MARIADB_BASE_URL = '/mariadb';
  public static MONGODB_BASE_URL = '/mongodb';
  public static NEO4J_BASE_URL = '/neo4j';

  public SelectedTest: Test;

  @Input()
  public Tests: Test[];

  router: Router;

  public Results: Result[] = [
    {Name: 'MariaDB', Loading: true, Content: 'Empty'},
    {Name: 'MongoDB', Loading: false, Content: 'Empty'},
    {Name: 'Neo4J', Loading: true, Content: 'Empty'}
  ];

  ngOnInit(): void {
  }

  public StartTest() {
    console.log(this.SelectedTest);
    // Der Pfad wird wie gefolgt zusammen gebaut:
    // DOCKER_URL (war ja sonst localhost) + DB_BASE_URL (siehe oben) + this.SelectedTest.Path + '/' + this.SelectedTest.Steps[0].Value
    // Beachte 2 Utils Anfragen haben keinen Step und die Update Anfrage hat 2 Steps (sonst alle 1 Step)
    // Hier könnten alle 3 Anfragen an alle 3 DB gemacht werden
  }

}
