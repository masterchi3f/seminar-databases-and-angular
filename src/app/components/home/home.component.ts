import { Component, OnInit } from '@angular/core';
import {ModelService} from '../../model/model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _model: ModelService) {
    this._model.navName = 'Home';
  }

  ngOnInit(): void {
  }

}
