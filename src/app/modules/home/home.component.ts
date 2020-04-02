import {Component, OnInit} from '@angular/core';
import {FakeDbService} from '../../data/fake-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public fakeDbService: FakeDbService) {
  }

  ngOnInit(): void {
  }

}
