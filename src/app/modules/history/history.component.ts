import {Component, OnInit} from '@angular/core';
import {FakeDbService} from '../../data/fake-db.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public fakeDbService: FakeDbService) {
  }

  ngOnInit(): void {
    this.fakeDbService.AllRequest.forEach(t => t.Results.forEach(r => r.Content = r.DisplayResult));
  }
}
