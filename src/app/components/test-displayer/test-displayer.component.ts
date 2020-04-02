import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Result} from '../../data-classes/result';
import {Router} from '@angular/router';
import {Test} from '../../data-classes/test';
import {ApiService} from '../../network/api.service';
import {MatSelectChange} from '@angular/material/select';
import {StepperVerticalComponent} from '../stepper-vertical/stepper-vertical.component';
import {FakeDbService} from '../../data/fake-db.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-test-displayer',
  templateUrl: './test-displayer.component.html',
  styleUrls: ['./test-displayer.component.scss'],
})
export class TestDisplayerComponent implements OnInit {

  constructor(_router: Router, private apiService: ApiService, private fakeDbService: FakeDbService) {
    this.router = _router;
  }

  public static MARIADB_BASE_URL = '/mariadb';
  public static MONGODB_BASE_URL = '/mongodb';
  public static NEO4J_BASE_URL   = '/neo4j';

  public static MARIADB_PORT = 3000;
  public static MONGODB_PORT = 2999;
  public static NEO4J_PORT   = 2998;

  public SelectedTest: Test;
  public showCards: boolean = false;

  @ViewChild(StepperVerticalComponent) stepper: StepperVerticalComponent;

  @Input()
  public Tests: Test[];

  router: Router;

  public Results: Result[] = [
    {Name: 'MariaDB', Loading: true, Content: 'Empty', Time: ''},
    {Name: 'MongoDB', Loading: true, Content: 'Empty', Time: ''},
    {Name: 'Neo4J', Loading: true, Content: 'Empty', Time: ''},
  ];

  ngOnInit(): void {
  }

  public StartTest() {
    this.showCards = true;
    console.log(this.SelectedTest);
    const urlMariaDB = this.BuildUrl(TestDisplayerComponent.MARIADB_BASE_URL, TestDisplayerComponent.MARIADB_PORT);
    const urlMongoDB = this.BuildUrl(TestDisplayerComponent.MONGODB_BASE_URL, TestDisplayerComponent.MONGODB_PORT);
    const urlNeo4J   = this.BuildUrl(TestDisplayerComponent.NEO4J_BASE_URL, TestDisplayerComponent.NEO4J_PORT);

    console.log(urlMariaDB);
    console.log(urlMongoDB);
    console.log(urlNeo4J);

    this.SendRequest(urlMariaDB, 0);
    this.SendRequest(urlMongoDB, 1);
    this.SendRequest(urlNeo4J, 2);
  }

  private SettingResult(index: number, result: string, time: string): void {
    this.Results[index].Loading = false;
    this.Results[index].Content = result;
    this.Results[index].Time    = time;
  }

  private SendRequest(url: string, index: number) {

    this.Results = [
      {Name: 'MariaDB', Loading: true, Content: 'Empty', Time: ''},
      {Name: 'MongoDB', Loading: true, Content: 'Empty', Time: ''},
      {Name: 'Neo4j', Loading: true, Content: 'Empty', Time: ''},
    ];

    this.Results.forEach(s => {
        s.Loading = true;
        s.Time    = '';
        s.Content = '';
      },
    );

    /*new Promise(resolve =>
      setTimeout(resolve, 10000)
    ).then( r =>
      this.SettingResult(index, 'o', 'o')
    );*/

    this.apiService.getData(url)
      .then(res => {
        this.SettingResult(index, JSON.stringify(res.Result), res.Time);
        this.TrySave();
      })
      .catch(err => {
        console.log(err);
        this.SettingResult(index, JSON.stringify(err), '');
      });
  }

  private BuildUrl(database: string, port: number) {
    let url = `http://localhost:${port}${database}${this.SelectedTest.Path}`;
    for (const step of this.SelectedTest.Steps) {
      url += `/${step.Value}`;
    }
    return url;
  }

  public SelectionChanged(source: MatSelectChange) {
    this.SelectedTest.Steps.forEach(step => step.Value = '');
    if (this.stepper) {
      this.stepper.Reset();
    }
  }

  private TrySave() {
    let allFinished = true;
    this.Results.forEach(r => {
      if (r.Loading) {
        allFinished = false;
      }
    });
    if (allFinished) {
      this.fakeDbService.AddTest(this.Results, this.SelectedTest);
    }
  }
}
