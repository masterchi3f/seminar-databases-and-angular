import { Component, OnInit } from '@angular/core';
import {ModelService} from '../../model/model.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  model: ModelService;

  constructor(private _model: ModelService) {
    this.model = _model;
    _model.navName = 'Save';
    this.createSteps();
  }

  createSteps() {
    this.model.steps = [];
    this.model.steps[0] = [];
    this.model.steps[0][0] = 'Set database size';
    this.model.steps[0][1] = 'Database size';
    this.model.steps[0][2] = 'number';
    this.model.steps[1] = [];
    this.model.steps[1][0] = 'Set test (but obviously not necessary in future)';
    this.model.steps[1][1] = 'test size';
    this.model.steps[1][2] = 'number';
  }

  ngOnInit(): void {
  }

}
